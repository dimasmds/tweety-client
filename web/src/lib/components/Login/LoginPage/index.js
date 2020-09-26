import { connect } from 'pwa-helpers';
import { html } from 'lit-html';
import { handleLogin, store } from 'tweet-client-core/lib';
import CommonElement from '../../__base__/CommonElement';
import style from './style.scss';

class LoginPage extends connect(store)(CommonElement) {
  static get properties() {
    return {
      _username: { type: String },
      _password: { type: String },
    };
  }

  static get styles() {
    return [...super.styles, style];
  }

  constructor() {
    super();
    this._username = '';
    this._password = '';
  }

  _onUsernameChangeHandler(event) {
    const { value } = event.target;
    this._username = value;
  }

  _onPasswordChangeHandler(event) {
    const { value } = event.target;
    this._password = value;
  }

  _onLoginHandler(event) {
    event.preventDefault();
    store.dispatch(handleLogin(this._username, this._password));
  }

  render() {
    return html`
      <div class="login-page">
        <div class="login-container">
            <div class="login-content__header">
                <h1>Tweety</h1>
                <p>Please login to continue</p>
            </div>
            <div class="login-content__input">
                <form class="login-input__form">
                    <input class="login-input__text" type="text" placeholder="Username" @change="${this._onUsernameChangeHandler}" .value="${this._username}" required>
                    <input class="login-input__text" type="password" placeholder="Password" @change="${this._onPasswordChangeHandler}" .value="${this._password}" required>
                    <button class="login-input__submit" @click="${this._onLoginHandler}">Login</button>
                </form>
            </div>
        </div>
      </div>
    `;
  }
}

customElements.define('login-page', LoginPage);
