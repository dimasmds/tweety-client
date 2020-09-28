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
    return html`
      <p>${JSON.stringify(this._tweet)}</p>
    `;
  }
}

customElements.define('tweet-item', TweetItem);
