import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mockedUser } from '../../__mocks__/user';
import {
  handleLoggedUser,
  receiveUsersAction,
} from '../../../../lib/_LoggedUser/adapters/redux/actions';
import { EndpointAPI } from '../../../../lib/config';
import { LoadingAction } from '../../../../lib/_Shared/loading/adapters/redux';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Users Action', () => {
  it('should create an action to receive users correctly', () => {
    const user = mockedUser;

    const expectedAction = {
      type: 'RECEIVE_USER',
      user,
    };

    expect(receiveUsersAction(user)).toEqual(expectedAction);
  });

  it('should create RECEIVE_USERS action when fetching users from API', async () => {
    fetchMock.getOnce(EndpointAPI.getUserById('fakeUserId'), {
      body: { user: mockedUser },
    });

    const expectedActions = [
      { type: LoadingAction.LOADING },
      { type: 'RECEIVE_USER', user: mockedUser },
      { type: LoadingAction.READY },
    ];

    const store = mockStore([]);

    // @ts-ignore
    await store.dispatch(handleLoggedUser('fakeUserId'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
