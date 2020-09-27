import { userReducer } from '../../../../lib/_user/adapters/redux/reducers';
import { mockedUsers } from '../../__mocks__/user';

describe('Users Reducers', () => {
  it('should return initial data correctly', () => {
    expect(userReducer(undefined, {})).toEqual(null);
  });

  it('should handle receive users action correctly', () => {
    expect(userReducer(null, {
      type: 'RECEIVE_USERS',
      users: mockedUsers,
    })).toEqual(mockedUsers);
  });
});
