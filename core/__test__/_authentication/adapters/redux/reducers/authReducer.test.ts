import { AuthenticationAction } from '../../../../../lib/_authentication/adapters/redux/actions';
import { authReducer } from '../../../../../lib/_authentication/adapters/redux/reducers';

describe('Auth Reducer', () => {
  it('should return have default value when not set', () => {
    expect(authReducer(undefined, {})).toEqual(null);
  });

  it('should put authed id correctly', () => {
    expect(authReducer(null, {
      type: AuthenticationAction.SET_AUTH,
      id: 'asdfghkl',
    })).toEqual('asdfghkl');
  });

  it('should remove authed id correctly', () => {
    expect(authReducer('asdfghkl', {
      type: AuthenticationAction.REMOVE_AUTH,
    })).toEqual(null);
  });
});
