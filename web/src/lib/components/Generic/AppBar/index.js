import { html } from 'lit-html';
import { connect } from 'pwa-helpers';
import { navigator } from 'lit-element-router';
import { store } from 'tweet-client-core/lib';
import CommonElement from '../../__base__/CommonElement';

import style from './style.scss';

class AppBar extends connect(store)(navigator(CommonElement)) {
  static get properties() {
    return {
      _user: { type: Object },
      _openDrawer: { type: Boolean },
    };
  }

  static get styles() {
    return [...super.styles, style];
  }

  constructor() {
    super();
    this._user = null;
    this._openDrawer = false;
  }

  stateChanged({ user }) {
    this._user = user;
  }

  _hamburgerButtonClickHandler() {
    this._openDrawer = !this._openDrawer;
  }

  render() {
    return html`
      <header class="app-bar">
        <div class="app-bar__menu">
            <button @click="${this._hamburgerButtonClickHandler}" class="app-bar__menu__button">☰</button>
        </div>
        <div class="app-bar__brand">
            <h1>Tweety</h1>
        </div>
        <nav class="app-bar__navigation ${this._openDrawer ? 'open' : ''}">
            <ul>
                <li><app-link app-bar href="/">Timeline</app-link></li>
                <li><app-link app-bar href="/user/${this._user.username}">Profile</app-link></li>
                <li><app-link app-bar href="/logout">Logout</app-link></li>
            </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('app-bar', AppBar);
