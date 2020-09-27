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
      _passwordVisibility: { type: Boolean },
    };
  }

  static get styles() {
    return [...super.styles, style];
  }

  constructor() {
    super();
    this._username = '';
    this._password = '';
    this._passwordVisibility = false;
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

  _changePasswordVisibilityHandler() {
    this._passwordVisibility = !this._passwordVisibility;
  }

  render() {
    import(/* webpackChunkName: 'app-link' */'../../App/AppLink');
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
                    <div class="login-input__password">
                        <input class="login-input__text" type="${this._passwordVisibility ? 'text' : 'password'}" placeholder="Password" @change="${this._onPasswordChangeHandler}" .value="${this._password}" required>
                        <button type="button" @click="${this._changePasswordVisibilityHandler}" class="login-input__password-button-visible">${this._passwordVisibility ? 'Hide' : 'Show'}</button>
                    </div>
                    <button class="login-input__submit" @click="${this._onLoginHandler}">Login</button>
                </form>
            </div>
            <div class="login-content__footer">
                <app-link center block no-decoration href="/register">Sign Up for Tweety</app-link>
            </div>
        </div>
      </div>
    `;
  }
}

customElements.define('login-page', LoginPage);
