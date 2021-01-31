export default { title: 'Buttons' };

import button from './button.twig';
import './button.scss';
import './button.js';
import drupalAttribute from 'drupal-attribute'

export const primary_button = () => (
    button({
      attributes: new drupalAttribute(),
      type: 'primary',
      href: '#',
      external: true,
      button_label: 'Primary Button'
    })
);

export const secondary_button = () => (
    button({
      attributes: new drupalAttribute(),
      type: 'secondary',
      href: '#',
      external: false,
      button_label: 'Secondary Button'
    })
);
