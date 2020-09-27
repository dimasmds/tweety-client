import { usersReducer } from '../../../../lib/_user/adapters/redux/reducers';
import { mockedUsers } from '../../__mocks__/user';

describe('Users Reducers', () => {
  it('should return initial data correctly', () => {
    expect(usersReducer(undefined, {})).toEqual([]);
  });

  it('should handle receive users action correctly', () => {
    expect(usersReducer([], {
      type: 'RECEIVE_USERS',
      users: mockedUsers,
    })).toEqual(mockedUsers);
  });
});
