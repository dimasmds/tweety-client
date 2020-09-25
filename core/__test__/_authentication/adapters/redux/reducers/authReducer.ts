import { AuthenticationAction } from '../../../../../lib/_authentication/adapters/redux/actions';

describe('Auth Reducer', () => {
  it('should return have default value when not set', () => {
    expect(authReducer(undefined, {})).toEqual(null);
  });

  it('should put authed id correctly', () => {
    expect(authReducer(null, {
      type: AuthenticationAction.SET_AUTH,
      id: 'asdfghkl',
    })).toEqual('asdfjkl');
  });
});
