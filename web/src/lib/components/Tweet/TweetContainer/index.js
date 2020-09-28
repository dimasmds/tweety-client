import { connect } from 'pwa-helpers';
import { handleInitialTweets, store } from 'tweet-client-core/lib';
import { html } from 'lit-html';
import CommonElement from '../../__base__/CommonElement';

import style from './style.scss';
import '../TweetItem';

class TweetContainer extends connect(store)(CommonElement) {
  static get properties() {
    return {
      _tweets: { type: Array },
    };
  }

  static get styles() {
    return [...super.styles, style];
  }

  constructor() {
    super();
    this._tweets = null;
  }

  stateChanged({ tweets }) {
    this._tweets = tweets;
  }

  connectedCallback() {
    super.connectedCallback();
    store.dispatch(handleInitialTweets());
  }

  render() {
    return html`
      ${this._tweets.map((tweet) => html`<tweet-item ._tweet="${tweet}"></tweet-item>`)}
    `;
  }
}

customElements.define('tweet-container', TweetContainer);
