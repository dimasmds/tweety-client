import { userReducer } from '../../../../lib/_User/adapters/redux/reducers';
import { mockedUser } from '../../__mocks__/user';

describe('Users Reducers', () => {
  it('should return initial data correctly', () => {
    expect(userReducer(undefined, {})).toEqual(null);
  });

  it('should handle receive users action correctly', () => {
    expect(userReducer(null, {
      type: 'RECEIVE_USER',
      user: mockedUser,
    })).toEqual(mockedUser);
  });
});
