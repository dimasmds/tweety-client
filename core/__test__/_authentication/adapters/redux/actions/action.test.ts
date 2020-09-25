import { AuthenticationAction, logInAction } from '../../../../../lib/_authentication/adapters/redux/actions';

describe('Authentication Action', () => {
  it('should create an action for log in correctly', () => {
    const expectedUsername = 'dimasmds';
    expect(logInAction(expectedUsername)).toEqual({
      type: AuthenticationAction.LOG_IN,
      username: expectedUsername,
    });
  });
});
