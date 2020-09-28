import { html } from 'lit-html';
import { connect } from 'pwa-helpers';
import { handleAddTweet, store } from 'tweet-client-core/lib';
import CommonElement from '../../__base__/CommonElement';

import style from './style.scss';

class TweetInput extends connect(store)(CommonElement) {
  static get properties() {
    return {
      _tweet: { type: String },
      _user: { type: Object },
    };
  }

  constructor() {
    super();
    this._tweet = '';
    this._user = null;
  }

  stateChanged({ user }) {
    this._user = user;
  }

  static get styles() {
    return [...super.styles, style];
  }

  _onTweetInput({ target }) {
    // eslint-disable-next-line no-shadow
    const { value, style } = target;
    style.height = '5px';
    style.height = `${target.scrollHeight}px`;
    this._tweet = value;
  }

  _onTweetSubmitClickHandler() {
    const { auth } = store.getState();

    store.dispatch(handleAddTweet({
      tweet: this._tweet,
      author: auth,
    }));
  }

  render() {
    const { avatarUrl, name } = this._user;
    return html`
      <div class="tweet-input">
        <div class="tweet-input__header">
            <img class="tweet-input__avatar" src="${avatarUrl === '' ? './images/icons/user.svg' : avatarUrl}" alt="${name}">
            <textarea @keyup="${this._onTweetInput}" class="tweet-input__input" placeholder="What's happening?"></textarea>
        </div>
        <button @click="${this._onTweetSubmitClickHandler}" class="tweet-input__submit">Send Tweet</button>
      </div>
    `;
  }
}

customElements.define('tweet-input', TweetInput);
