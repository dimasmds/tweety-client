import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  AuthenticationAction,
  handleLogin,
  logInAction,
} from '../../../../../lib/_authentication/adapters/redux/actions';
import { EndpointAPI } from '../../../../../lib/config';
import { mockedAuthentication } from '../../../__mocks__/authentication';
import { LoadingAction } from '../../../../../lib/_shared/loading/adapters/redux';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Authentication Action', () => {
  it('should create an action for log in correctly', () => {
    const expectedId = 'usr-nbw2s2nkks9wmmw2kk';
    expect(logInAction(expectedId)).toEqual({
      type: AuthenticationAction.LOG_IN,
      id: expectedId,
    });
  });

  it('should create an action for log in when fetch to api', async () => {
    fetchMock.postOnce(EndpointAPI.logIn, {
      body: mockedAuthentication,
    });

    const inputUsername = 'dimasmds';
    const inputPassword = 'qwerty123';

    const expectedActions = [
      { type: LoadingAction.LOADING },
      { type: AuthenticationAction.LOG_IN, id: mockedAuthentication.userId },
      { type: LoadingAction.READY },
    ];

    const store = mockStore('');
    // @ts-ignore
    await store.dispatch(handleLogin(inputUsername, inputPassword));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
