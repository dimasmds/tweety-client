import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  AuthenticationAction, handleGetAuth,
  handleLogin, handleLogout, handleRegister, removeAuthUserAction,
  setAuthUserAction,
} from '../../../../../lib/_authentication/adapters/redux/actions';
import { EndpointAPI } from '../../../../../lib/config';
import { mockedAuthentication } from '../../../__mocks__/authentication';
import { LoadingAction } from '../../../../../lib/_shared/loading/adapters/redux';
import { AuthenticationService } from '../../../../../lib/_authentication/services';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Authentication Action', () => {
  it('should create an action to set auth user correctly', () => {
    const expectedId = 'usr-nbw2s2nkks9wmmw2kk';
    expect(setAuthUserAction(expectedId)).toEqual({
      type: AuthenticationAction.SET_AUTH,
      id: expectedId,
    });
  });

  it('should create an action to set auth user when log in success', async () => {
    fetchMock.postOnce(EndpointAPI.logIn, {
      body: mockedAuthentication,
    });

    const inputUsername = 'dimasmds';
    const inputPassword = 'qwerty123';

    const expectedActions = [
      { type: LoadingAction.LOADING },
      { type: AuthenticationAction.SET_AUTH, id: mockedAuthentication.userId },
      { type: LoadingAction.READY },
    ];

    const store = mockStore('');
    // @ts-ignore
    await store.dispatch(handleLogin(inputUsername, inputPassword));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an action to remove auth user correctly', () => {
    expect(removeAuthUserAction()).toEqual({
      type: AuthenticationAction.REMOVE_AUTH,
    });
  });

  it('should set auth from saved auth when initial auth', async () => {
    const spyGetAuth = jest.spyOn(AuthenticationService.prototype as any, 'getAuth')
      .mockResolvedValue('fakeUserId');

    const expectedActions = [
      { type: LoadingAction.LOADING },
      { type: AuthenticationAction.SET_AUTH, id: 'fakeUserId' },
      { type: LoadingAction.READY },
    ];

    const store = mockStore(null);
    // @ts-ignore
    await store.dispatch(handleGetAuth());
    expect(store.getActions()).toEqual(expectedActions);
    expect(spyGetAuth).toBeCalled();
  });

  it('should handle and create action correctly when user logout', async () => {
    const expectedActions = [
      { type: LoadingAction.LOADING },
      { type: AuthenticationAction.REMOVE_AUTH },
      { type: LoadingAction.READY },
    ];

    const store = mockStore('fakeUserId');
    // @ts-ignore
    await store.dispatch(handleLogout());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should handle correctly when user has registered', async () => {
    fetchMock.postOnce(EndpointAPI.registerUser, { userId: 'fakeUserId' });

    const expectedActions = [
      { type: LoadingAction.LOADING },
      { type: AuthenticationAction.SET_AUTH, id: 'fakeUserId' },
      { type: LoadingAction.READY },
    ];

    const store = mockStore(null);
    // @ts-ignore
    await store.dispatch(handleRegister({
      name: 'fakeName',
      username: 'fakeUsername',
      password: 'fakePassword',
    }));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
