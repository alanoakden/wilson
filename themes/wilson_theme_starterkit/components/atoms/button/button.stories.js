export default { title: 'Buttons' };

import block from './button.twig';
import '../../../css/styles.css'
import drupalAttribute from 'drupal-attribute'

export const default_button = () => (
    block({
      attributes: new drupalAttribute(),
      type: 'primary',
      button_label: "I'm a block!",
      items: [
        {
          content: {
            '#url': {
              isExternal: 'isxternal'
            },
            '#title': 'Button Title'
          }
        },
      ],

    })
);

export const secondary_button = () => (
    block({
      attributes: new drupalAttribute(),
      button_label: "I'm a block!",
      type: 'secondary',
      items: [
        {
          content: {
            '#url': {
              isExternal: 'isxternal'
            },
            '#title': 'Secondary Button Title'
          }
        },
      ],

    })
);
