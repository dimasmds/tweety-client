/* eslint-disable no-nested-ternary */
import { html } from 'lit-html';
import { connect } from 'pwa-helpers';
import { store } from 'tweet-client-core/lib';
import CommonElement from '../../__base__/CommonElement';
import style from './style.scss';

class PreLoader extends connect(store)(CommonElement) {
  static get properties() {
    return {
      _loader: { type: Boolean },
    };
  }

  static get styles() {
    return [...super.styles, style];
  }

  stateChanged({ loading }) {
    this._loader = loading;
  }

  constructor() {
    super();
    this._loader = null;
  }

  render() {
    return html`
      <div class="${this._loader === null ? '' : this._loader ? 'load' : 'finish'}">
      </div>
    `;
  }
}

customElements.define('pre-loader', PreLoader);
