import { outlet } from 'lit-element-router';
import { html } from 'lit-html';

import CommonElement from '../../__base__/CommonElement';

class AppMain extends outlet(CommonElement) {
  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('app-main', AppMain);
