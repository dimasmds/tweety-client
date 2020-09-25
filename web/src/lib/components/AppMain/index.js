import { outlet } from 'lit-element-router';
import { html } from 'lit-html';
import { LitElement } from 'lit-element';

class AppMain extends outlet(LitElement) {
  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('app-main', AppMain);
