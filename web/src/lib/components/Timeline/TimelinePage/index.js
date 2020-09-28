import { html } from 'lit-html';
import CommonElement from '../../__base__/CommonElement';

import style from './style.scss';

import '../../Generic/AppBar';
import '../TweetInput';
import '../../Tweet/TweetContainer';

class TimelinePage extends CommonElement {
  static get styles() {
    return [...super.styles, style];
  }

  constructor() {
    super();
    this._appBar = null;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this._appBar = this.shadowRoot.querySelector('app-bar');
  }

  _onTimelineContentClickHandler() {
    this._appBar._openDrawer = false;
  }

  render() {
    return html`
      <main class="timeline-page">
        <app-bar></app-bar>
        <div @click="${this._onTimelineContentClickHandler}" class="wrapper">
            <div class="timeline-content">
                <div class="timeline-content__head">
                <tweet-input></tweet-input>  
            </div>
            <tweet-container></tweet-container>      
            </div>
        </div>
        </div>
      </main>
    `;
  }
}

customElements.define('timeline-page', TimelinePage);
