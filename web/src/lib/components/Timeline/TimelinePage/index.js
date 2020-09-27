import { html } from 'lit-html';
import CommonElement from '../../__base__/CommonElement';

import style from './style.scss';

import '../../Generic/AppBar';

class TimelinePage extends CommonElement {
  static get styles() {
    return [...super.styles, style];
  }

  render() {
    return html`
      <div class="timeline-page">
        <app-bar></app-bar>
      </div>
    `;
  }
}

customElements.define('timeline-page', TimelinePage);
