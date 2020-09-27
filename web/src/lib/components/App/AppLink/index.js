import { navigator } from 'lit-element-router';
import { html } from 'lit-html';
import CommonElement from '../../__base__/CommonElement';

import style from './style.scss';

class AppLink extends navigator(CommonElement) {
  static get properties() {
    return {
      href: { type: String },
    };
  }

  static get styles() {
    return [...super.styles, style];
  }

  constructor() {
    super();
    this.href = '';
  }

  render() {
    return html`
    <a href="${this.href}" @click="${this.linkClick}">
        <slot></slot>
    </a>
    `;
  }

  linkClick(event) {
    event.preventDefault();
    this.navigate(this.href);
  }
}

customElements.define('app-link', AppLink);
