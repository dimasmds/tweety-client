import { mockedUsers } from '../../__mocks__/user';

describe('Users Action', () => {
  it('should create an action to receive users correctly', () => {
    const users = mockedUsers;

    const expectedAction = {
      type: 'RECEIVE_USERS',
      users,
    };

    expect(receiveUsersAction(users)).toBe(expectedAction);
  });
});
