import { connect } from 'pwa-helpers';
import { navigator } from 'lit-element-router';
import { handleRegisterUser, store } from 'tweet-client-core/lib';
import { html } from 'lit-html';
import CommonElement from '../../__base__/CommonElement';

import style from './style.scss';

class RegisterPage extends connect(store)(navigator(CommonElement)) {
  static get properties() {
    return {
      _username: { type: String },
      _name: { type: String },
      _password: { type: String },
    };
  }

  static get styles() {
    return [...super.styles, style];
  }

  constructor() {
    super();
    this._username = '';
    this._name = '';
    this._password = '';
  }

  onStateChanged() {
    this.navigate('/');
  }

  _onUsernameChangeHandler({ target }) {
    this._username = target.value;
  }

  _onNameChangeHandler({ target }) {
    this._name = target.value;
  }

  _onPasswordChangeHandler({ target }) {
    this._password = target.value;
  }

  _onRegisterButtonClickHandler(event) {
    event.preventDefault();

    store.dispatch(handleRegisterUser({
      name: this._name,
      username: this._username,
      password: this._password,
    }));
  }

  render() {
    import(/* webpackChunkName: 'app-link' */'../../App/AppLink');
    return html`
      <div class="register-page">
        <div class="register-container">
            <div class="register-content__header">
                <h1>Create Tweety Account</h1>
                <p>Please fill all the form</p>
            </div>
            <div class="register-content__input">
                <form class="register-input__form">
                    <input class="register-input__text" type="text" placeholder="username" @change="${this._onUsernameChangeHandler}" .value="${this._username}">
                    <input class="register-input__text" type="text" placeholder="name" @change="${this._onNameChangeHandler}" .value="${this._name}">
                    <input class="register-input__text" type="password" placeholder="password" @change="${this._onPasswordChangeHandler}" .value="${this._password}">
                    <button class="register-input__submit" @click="${this._onRegisterButtonClickHandler}">Register</button>
                </form>
            </div>
            <div class="register-content__footer">
                <app-link center block no-decoration href="/">Already have account</app-link>
            </div>
        </div>
      </div>
    `;
  }
}

customElements.define('register-page', RegisterPage);
