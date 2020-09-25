import { AuthenticationAction, logInAction } from '../../../../../lib/_authentication/adapters/redux/actions';

describe('Authentication Action', () => {
  it('should create an action for log in correctly', () => {
    const expectedId = 'dimasmds';
    expect(logInAction(expectedId)).toEqual({
      type: AuthenticationAction.LOG_IN,
      id: expectedId,
    });
  });
});
