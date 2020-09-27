import { html } from 'lit-html';
import { router, navigator } from 'lit-element-router';
import { handleGetAuth, handleLoggedUser, store } from 'tweet-client-core/lib';
import { connect } from 'pwa-helpers';
import CommonElement from '../../__base__/CommonElement';
import routes from '../../../routes';

import '../AppMain';
import '../../Auth/LoginPage';
import '../../Auth/RegisterPage';
import '../../Auth/LogoutPage';
import '../../Timeline/TimelinePage';

class AppRoute extends connect(store)(navigator(router(CommonElement))) {
  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
      data: { type: Object },
      _auth: { type: String },
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
    this._auth = null;
  }

  connectedCallback() {
    super.connectedCallback();
    store.dispatch(handleGetAuth());
  }

  stateChanged({ auth }) {
    this._auth = auth;
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    this.data = data;
  }

  render() {
    if (this.route === 'logout') {
      return this._renderLogoutPage();
    }

    if (!this._auth && this.route !== 'register') {
      return this._renderLoginPage();
    }

    if (this._auth && this.route === 'register') {
      this.navigate('/');
    }

    if (this.route !== 'register') {
      store.dispatch(handleLoggedUser(this._auth));
    }

    if (this.route === 'register') {
      return html`<register-page></register-page>`;
    }

    return this._renderAppMain();
  }

  _renderLoginPage() {
    return html`<login-page></login-page>`;
  }

  _renderLogoutPage() {
    return html`<logout-page></logout-page>`;
  }

  _renderAppMain() {
    return html`
       <app-main active-route="${this.route}">
            <div route="timeline">
                <timeline-page></timeline-page>
            </div>
            <h1 route="user">user</h1>
            <h1 route="not-found">Not Found</h1>
       </app-main>
    `;
  }
}

customElements.define('app-route', AppRoute);
