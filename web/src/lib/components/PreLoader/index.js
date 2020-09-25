import { html } from 'lit-html';
import { connect } from 'pwa-helpers';
import CommonElement from '../__base__/CommonElement';
import { store } from '../../../../../core/lib/frameworks';

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
    this._loader = false;
  }

  render() {
    return html`
      <div class="pre-loader ${this._loader ? 'show' : 'hide'}">
        <h2>HAI!</h2>
      </div>
    `;
  }
}

customElements.define('pre-loader', PreLoader);
