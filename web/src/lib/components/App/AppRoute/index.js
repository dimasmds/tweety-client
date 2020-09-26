import { html } from 'lit-html';
import { router } from 'lit-element-router';
import CommonElement from '../../__base__/CommonElement';
import routes from '../../../routes';

import '../AppMain';
import '../AppLink';
import '../../Auth/LogoutButton';

class AppRoute extends router(CommonElement) {
  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
      data: { type: Object },
    };
  }

  static get routes() {
    return [...routes];
  }

  constructor() {
    super();
    this.route = '';
    this.params = {};
    this.query = {};
    this.data = {};
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    this.data = data;
  }

  render() {
    return html`
       <app-main active-route="${this.route}">
            <div route="timeline">
                <h1>Timeline</h1>
                <logout-button>Logout</logout-button>
            </div>
            <h1 route="about">about</h1>
            <h1 route="not-found">Not Found</h1>
       </app-main>
    `;
  }
}

customElements.define('app-route', AppRoute);
