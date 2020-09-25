import { html } from 'lit-html';
import { connect } from 'pwa-helpers';
import CommonElement from '../__base__/CommonElement';
import style from './style.scss';
import { store } from '../../../../../core/lib/frameworks';
import { handleInitialTweets } from '../../../../../core/lib/_tweets/adapters/redux/actions';

class AppElement extends connect(store)(CommonElement) {
  static get styles() {
    return [...super.styles, style];
  }

  static get properties() {
    return {
      _title: { type: String },
      _tweets: { type: Array },
    };
  }

  constructor() {
    super();
    // eslint-disable-next-line no-underscore-dangle
    this._title = '';
    this._tweets = [];
  }

  connectedCallback() {
    super.connectedCallback();
    store.dispatch(handleInitialTweets());
  }

  stateChanged({ tweets }) {
    this._tweets = tweets;
  }

  render() {
    if (!this._tweets.length) {
      return html`
        <div class="app">
          <h1>${this._title}</h1>
        </div>
    `;
    }

    return html`
      <div class="app">
        <h1>${JSON.stringify(this._tweets)}</h1>
      </div>
    `;
  }
}

customElements.define('app-element', AppElement);
