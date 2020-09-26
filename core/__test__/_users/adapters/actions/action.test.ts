import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mockedUsers } from '../../__mocks__/user';
import {
  handleInitialUsers,
  handleRegisterUser,
  receiveUsersAction,
} from '../../../../lib/_users/adapters/redux/actions';
import { EndpointAPI } from '../../../../lib/config';
import { LoadingAction } from '../../../../lib/_shared/loading/adapters/redux';
import { ErrorAction } from '../../../../lib/_shared/error/adapters/redux';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Users Action', () => {
  it('should create an action to receive users correctly', () => {
    const users = mockedUsers;

    const expectedAction = {
      type: 'RECEIVE_USERS',
      users,
    };

    expect(receiveUsersAction(users)).toEqual(expectedAction);
  });

  it('should create RECEIVE_USERS action when fetching users from API', async () => {
    fetchMock.getOnce(EndpointAPI.getAllUsers, {
      body: { users: mockedUsers },
    });

    const expectedActions = [
      { type: LoadingAction.LOADING },
      { type: 'RECEIVE_USERS', users: mockedUsers },
      { type: LoadingAction.READY },
    ];

    const store = mockStore([]);
    // @ts-ignore
    await store.dispatch(handleInitialUsers());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create a correct action when user registered', async () => {
    fetchMock.postOnce(EndpointAPI.registerUser, {
      body: { message: 'success' },
    });

    const expectedActions = [
      { type: LoadingAction.LOADING },
      { type: LoadingAction.READY },
    ];

    const store = mockStore([]);

    // @ts-ignore
    await store.dispatch(handleRegisterUser({
      username: 'dimasmds',
      password: 'qwerty123',
      name: 'Dimas Maulana Dwi Saputra',
    }));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create a error action when user registered', async () => {
    fetchMock.postOnce(EndpointAPI.registerUser, () => {
      throw new Error('Ups Error nih!');
    }, { overwriteRoutes: true });

    const expectedActions = [
      { type: LoadingAction.LOADING },
      {
        type: ErrorAction.SET_ERROR,
        error: {
          userMessage: 'Ups Error nih!',
          originalMessage: 'Ups Error nih!',
        },
      },
      { type: LoadingAction.READY },
    ];

    const store = mockStore([]);

    // @ts-ignore
    await store.dispatch(handleRegisterUser({
      username: 'dimasmds',
      password: 'qwerty123',
      name: 'Dimas Maulana Dwi Saputra',
    }));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
