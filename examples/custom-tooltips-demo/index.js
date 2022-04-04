/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Test page for example plugin showing custom tooltip rendering.
 */


/**
 * Create and register the custom tooltip rendering function.
 * This could be extracted into a plugin if desired.
 */
function initTooltips() {
  // Create a custom rendering function. This function will be called whenever
  // a tooltip is shown in Blockly. The first argument is the div to render
  // the content into. The second argument is the element to show the tooltip
  // for.
  const customTooltip = function(div, element) {
    if (element instanceof Blockly.BlockSvg) {
      // Set the background color to the color of the block
      div.style.backgroundColor = element.getColour();
    }
    const tip = Blockly.Tooltip.getTooltipOfObject(element);
    const text = document.createElement('div');
    text.textContent = tip;
    const container = document.createElement('div');
    container.style.display = 'flex';
    if (element.tooltipImg) {
      const img = document.createElement('img');
      img.setAttribute('src', element.tooltipImg);
      container.appendChild(img);
    }
    container.appendChild(text);
    div.appendChild(container);
  };
  // Register the function in the Blockly.Tooltip so that Blockly calls it
  // when needed.
  Blockly.Tooltip.setCustomTooltip(customTooltip);
}

/**
 * Create a workspace.
 * @param {HTMLElement} blocklyDiv The blockly container div.
 * @param {!Blockly.BlocklyOptions} options The Blockly options.
 * @return {!Blockly.WorkspaceSvg} The created workspace.
 */
function createWorkspace(blocklyDiv, options) {
  const workspace = Blockly.inject(blocklyDiv, options);

  initTooltips();

  return workspace;
}

document.addEventListener('DOMContentLoaded', function() {
  Blockly.Blocks['custom_tooltip_1'] = {
    init: function() {
      this.appendDummyInput()
          .appendField('This is a test block.');
      this.setColour(150);
      this.setTooltip('This is a regular tooltip.');
      this.setHelpUrl('');
    },
  };
  Blockly.Blocks['custom_tooltip_2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField('Mouse over me.');
      this.setColour(150);
      this.setTooltip('Tip: This tooltip has an image.');
      // We will check for this property in our custom rendering code.
      this.tooltipImg = 'lightbulb.png';
      this.setHelpUrl('');
    },
  };
  const defaultOptions = {
    toolbox: document.getElementById('toolbox'),
  };
  // eslint-disable-next-line no-undef
  createPlayground(document.getElementById('root'), createWorkspace,
      defaultOptions);
});