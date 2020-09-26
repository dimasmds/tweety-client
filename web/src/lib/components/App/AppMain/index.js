import { outlet } from 'lit-element-router';
import { html } from 'lit-html';
import { handleGetAuth, store } from 'tweet-client-core/lib';
import { connect } from 'pwa-helpers';

import CommonElement from '../../__base__/CommonElement';
import '../../Auth/LoginPage';

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

  connectedCallback() {
    super.connectedCallback();
    store.dispatch(handleGetAuth());
  }

  render() {
    if (!this._auth) {
      return html`<login-page></login-page>`;
    }
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('app-main', AppMain);
