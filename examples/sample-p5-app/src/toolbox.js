export const toolbox = {
  'kind': 'categoryToolbox',
  'contents': [
    {
      "kind": "category",
      "name": "Color",
      "contents": [
        {
          kind: 'block',
          type: 'p5_background_color',
          inputs: {
            COLOR: {
              shadow: {
                type: 'colour_picker',
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'p5_stroke',
          inputs: {
            COLOR: {
              shadow: {
                type: 'colour_picker',
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'p5_fill',
          inputs: {
            COLOR: {
              shadow: {
                type: 'colour_picker',
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'colour_picker',
        },
        {
          kind: 'block',
          type: 'colour_random',
        },
      ]
    },
    {
      "kind": "category",
      "name": "Shape",
      "contents": [
        {
          kind: 'block',
          type: 'p5_ellipse',
          inputs: {
            X: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 100,
                },
              },
            },
            Y: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 100,
                },
              },
            },
            WIDTH: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 50,
                },
              },
            },
            HEIGHT: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 50,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'p5_rect',
          inputs: {
            X: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 100,
                },
              },
            },
            Y: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 100,
                },
              },
            },
            WIDTH: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 50,
                },
              },
            },
            HEIGHT: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 50,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'logic_compare',
        },
        {
          'kind': 'block',
          'type': 'math_number',
        },
        {
          'kind': 'block',
          'type': 'math_arithmetic',
        },
      ]
    },
    {
      "kind": "category",
      "name": "Text",
      "contents": [
        {
          'kind': 'block',
          'type': 'text',
        },
        {
          'kind': 'block',
          'type': 'text_print',
        },
      ]
    },
    {
      "kind": "category",
      "name": "Control",
      "contents": [
        {
          'kind': 'block',
          'type': 'controls_if',
        },
        {
          'kind': 'block',
          'type': 'controls_repeat_ext',
        },
      ]
    },
    {
      "kind": "category",
      "name": "Operators",
      "contents": [
        {
          'kind': 'block',
          'type': 'math_random_int',
          'inputs': {
            'FROM': {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 0,
                },
              },
            },
            'TO': {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 400,
                },
              },
            },
          },
        },
      ]
    }
  ],
};
