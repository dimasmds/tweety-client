import { html } from 'lit-html';
import CommonElement from '../../__base__/CommonElement';

import style from './style.scss';

class TweetItem extends CommonElement {
  static get properties() {
    return {
      _tweet: { type: Object },
    };
  }

  constructor() {
    super();
    this._tweet = null;
  }

  static get styles() {
    return [...super.styles, style];
  }

  render() {
    const {
      id, tweet, date, author, retweets, likes, replyTo, isDeleted,
    } = this._tweet;

    const { avatarUrl, username, name } = author;

    if (isDeleted) {
      return '';
    }

    return html`
      <div class="tweet-item">
        <div class="tweet-item__content">
            <div class="tweet-item__content__left">
                <img class="tweet-item__avatar" width="40px" height="40px" src="${avatarUrl !== '' ? avatarUrl : './images/icons/user.svg'}" alt="${username}">
            </div>
            <div class="tweet-item__content__right">
                <div class="tweet-item__user-content">
                    <span class="tweet-item__name">${name}</span>    
                    <span class="tweet-item__username">@${username}</span>
                    ${replyTo ? html`<span class="reply-to">Reply to ...</span>` : ''}
                </div>
                <div class="tweet-item__tweet">
                    <p>${tweet}</p>
                </div>
            </div>
        </div>
        <div class="tweet-item__action-button">
            <button class="tweet-item__action">
                <img alt="retweet" src="./images/icons/retweet.svg" width="20px" height="20px">
                <span>${retweets ? retweets.length : 0}</span>
            </button>
            <button class="tweet-item__action">
                <img alt="likes" src="./images/icons/like.svg" width="20px" height="20px">
                <span>${likes ? likes.length : 0}</span>
            </button>
        </div>
      </div>
    `;
  }
}

customElements.define('tweet-item', TweetItem);
