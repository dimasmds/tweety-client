import { outlet } from 'lit-element-router';
import { html } from 'lit-html';
import { connect } from 'pwa-helpers';
import { store } from 'Core/lib/frameworks/redux/store';
import CommonElement from '../../__base__/CommonElement';

class AppMain extends connect(store)(outlet(CommonElement)) {
  static get properties() {
    return {
      _auth: { type: String },
    };
  }

  stateChanged({ auth }) {
    this._auth = auth;
  }

  constructor() {
    super();
    this._auth = null;
  }

  render() {
    if (!this._auth) {
      return html`<h1>Belum login</h1>`;
    }
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('app-main', AppMain);
