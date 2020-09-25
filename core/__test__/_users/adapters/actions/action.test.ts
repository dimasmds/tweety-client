import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mockedUsers } from '../../__mocks__/user';
import { handleInitialUsers, receiveUsersAction } from '../../../../lib/_users/adapters/redux/actions';
import { EndpointAPI } from '../../../../lib/config';
import { LoadingAction } from '../../../../lib/_shared/loading/adapters/redux';

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
});