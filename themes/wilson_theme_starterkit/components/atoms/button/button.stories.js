export default { title: 'Buttons' };

import button from './button.twig';
import '../../../css/styles.css'
import drupalAttribute from 'drupal-attribute'

export const default_button = () => (
    button({
      attributes: new drupalAttribute(),
      type: 'primary',
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
    button({
      attributes: new drupalAttribute(),
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
