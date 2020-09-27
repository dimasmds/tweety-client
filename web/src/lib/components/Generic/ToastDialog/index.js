import { connect } from 'pwa-helpers';
import { store } from 'tweet-client-core/lib';
import { html } from 'lit-html';
import CommonElement from '../../__base__/CommonElement';

import style from './style.scss';

class ToastDialog extends connect(store)(CommonElement) {
  static get properties() {
    return {
      _title: { type: String },
      _message: { type: String },
      _display: { type: Boolean },
    };
  }

  static get styles() {
    return [...super.styles, style];
  }

  stateChanged({ toast }) {
    const { title, message } = toast || { title: '', message: '' };
    this._title = title;
    this._message = message;
    this._display = !!toast;
  }

  constructor() {
    super();
    this._title = '';
    this._message = '';
    this._display = false;
  }

  render() {
    return html`
      <div class="toast-dialog ${this._display ? 'display' : ''}">
        <div class="toast-dialog__content ${this._display ? 'display' : ''}">
            <span>${this._title}</span>
            <p>${this._message}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('toast-dialog', ToastDialog);
