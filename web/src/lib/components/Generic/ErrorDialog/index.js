import { connect } from 'pwa-helpers';
import { removeErrorAction, store } from 'tweet-client-core/lib';
import { html } from 'lit-html';
import CommonElement from '../../__base__/CommonElement';

import style from './style.scss';

class ErrorDialog extends connect(store)(CommonElement) {
  static get properties() {
    return {
      _error: { type: Object },
      _display: { type: Boolean },
    };
  }

  static get styles() {
    return [...super.styles, style];
  }

  stateChanged({ error }) {
    if (error) {
      this._error = error;
      this._display = true;
    }
  }

  constructor() {
    super();
    this._error = {};
    this._display = false;
  }

  render() {
    setTimeout(() => {
      this._display = false;
      store.dispatch(removeErrorAction());
    }, 5000);

    return html`
      <div class="error-dialog">
        <div class="error-dialog__content ${this._display ? 'display' : ''}">
                <p>${this._error !== null ? this._error.userMessage : ''}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('error-dialog', ErrorDialog);
