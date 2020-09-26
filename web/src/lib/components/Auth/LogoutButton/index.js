import { html } from 'lit-html';
import { connect } from 'pwa-helpers';
import { handleLogout, store } from 'tweet-client-core/lib';
import CommonElement from '../../__base__/CommonElement';

import style from './style.scss';

class LogoutButton extends connect(store)(CommonElement) {
  static get styles() {
    return [...super.styles, style];
  }

  _handleLogout(event) {
    event.preventDefault();
    store.dispatch(handleLogout());
  }

  render() {
    return html`
      <button @click="${this._handleLogout}"><slot></slot></button>
    `;
  }
}

customElements.define('logout-button', LogoutButton);
