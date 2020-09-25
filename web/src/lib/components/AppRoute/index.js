import { html } from 'lit-html';
import { router } from 'lit-element-router';
import { LitElement } from 'lit-element';
import routes from '../../routes';

import '../AppMain';
import '../AppLink';

class AppRoute extends router(LitElement) {
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
       <app-link href="/">Home</app-link>
       <app-link href="/about">About</app-link>
       <app-main active-route="${this.route}">
            <h1 route="timeline">Timeline</h1>
            <h1 route="about">about</h1>
            <h1 route="not-found">Not Found</h1>
       </app-main>
    `;
  }
}

customElements.define('app-route', AppRoute);
