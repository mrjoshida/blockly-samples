import {javascriptGenerator} from 'blockly/javascript';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const generator = Object.create(null);

generator['text_print'] = function(block) {
  const msg = javascriptGenerator.valueToCode(block, 'TEXT',
      javascriptGenerator.ORDER_NONE) || '\'\'';
  return `sketch.text(${msg}, 20, 20);\n`;
};
generator['p5_setup'] = function(block) {
  const statements = javascriptGenerator.statementToCode(block, 'STATEMENTS');
  const code = `sketch.setup = function() {
${statements}};\n`;
  return code;
};

generator['p5_draw'] = function(block) {
  const statements = javascriptGenerator.statementToCode(block, 'STATEMENTS');
  const code = `sketch.draw = function() {
${statements}};\n`;
  return code;
};

generator['p5_canvas'] = function(block) {
  const width = block.getFieldValue('WIDTH') || 400;
  const height = block.getFieldValue('HEIGHT') || 400;
  return `sketch.createCanvas(${width}, ${height});\n`;
};

generator['p5_background_color'] = function(block) {
  const color = javascriptGenerator.valueToCode(block, 'COLOR',
      javascriptGenerator.ORDER_ATOMIC) || `'#fff'`;
  // TODO: Assemble JavaScript into code variable.
  const code = `sketch.background(${color});\n`;
  return code;
};

generator['p5_stroke'] = function(block) {
  const color = javascriptGenerator.valueToCode(block, 'COLOR',
      javascriptGenerator.ORDER_ATOMIC) || `'#fff'`;
  // TODO: Assemble JavaScript into code variable.
  const code = `sketch.stroke(${color});\n`;
  return code;
};

generator['p5_fill'] = function(block) {
  const color = javascriptGenerator.valueToCode(block, 'COLOR',
      javascriptGenerator.ORDER_ATOMIC) || `'#fff'`;
  // TODO: Assemble JavaScript into code variable.
  const code = `sketch.fill(${color});\n`;
  return code;
};

// Shapes

generator['p5_ellipse'] = function(block) {
  const x = javascriptGenerator.valueToCode(block, 'X',
      javascriptGenerator.ORDER_NONE) || 0;
  const y = javascriptGenerator.valueToCode(block, 'Y',
      javascriptGenerator.ORDER_NONE) || 0;
  const width = javascriptGenerator.valueToCode(block, 'WIDTH',
      javascriptGenerator.ORDER_NONE) || 0;
  const height = javascriptGenerator.valueToCode(block, 'HEIGHT',
      javascriptGenerator.ORDER_NONE) || 0;
  return `sketch.ellipse(${x}, ${y}, ${width}, ${height});\n`;
};

generator['p5_rect'] = function(block) {
  const x = javascriptGenerator.valueToCode(block, 'X',
      javascriptGenerator.ORDER_NONE) || 0;
  const y = javascriptGenerator.valueToCode(block, 'Y',
      javascriptGenerator.ORDER_NONE) || 0;
  const width = javascriptGenerator.valueToCode(block, 'WIDTH',
      javascriptGenerator.ORDER_NONE) || 0;
  const height = javascriptGenerator.valueToCode(block, 'HEIGHT',
      javascriptGenerator.ORDER_NONE) || 0;
  return `sketch.rect(${x}, ${y}, ${width}, ${height});\n`;
};

generator['p5_line'] = function(block) {
  const x1 = javascriptGenerator.valueToCode(block, 'X1',
      javascriptGenerator.ORDER_NONE) || 0;
  const y1 = javascriptGenerator.valueToCode(block, 'Y1',
      javascriptGenerator.ORDER_NONE) || 0;
  const x2 = javascriptGenerator.valueToCode(block, 'X2',
      javascriptGenerator.ORDER_NONE) || 0;
  const y2 = javascriptGenerator.valueToCode(block, 'Y2',
      javascriptGenerator.ORDER_NONE) || 0;
  return `sketch.line(${x1}, ${y1}, ${x2}, ${y2});\n`;
};
