import { connect } from 'pwa-helpers';
import { navigator } from 'lit-element-router';
import { handleLogout, store } from 'tweet-client-core/lib';
import { html } from 'lit-html';
import CommonElement from '../../__base__/CommonElement';

class LogoutPage extends connect(store)(navigator(CommonElement)) {
  connectedCallback() {
    super.connectedCallback();
    store.dispatch(handleLogout());
    this.navigate('/');
  }

  render() {
    return html``;
  }
}

customElements.define('logout-page', LogoutPage);
