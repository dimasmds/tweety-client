import { LitElement } from 'lit-element';
import { navigator } from 'lit-element-router';
import { html } from 'lit-html';

class AppLink extends navigator(LitElement) {
  static get properties() {
    return {
      href: { type: String },
    };
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
