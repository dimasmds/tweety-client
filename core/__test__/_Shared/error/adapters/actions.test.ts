import { addErrorAction, ErrorAction } from '../../../../lib/_Shared/error/adapters/redux';
import { TweetyError } from '../../../../lib/_Shared/error/entities';

describe('Error Actions', () => {
  it('should create an action correctly', () => {
    const mockTweetyError: TweetyError = { userMessage: 'Eror!', originalMessage: 'ror!', date: 'fakeDate' };
    const expectedAction = {
      type: ErrorAction.SET_ERROR,
      error: mockTweetyError,
    };

    expect(addErrorAction(mockTweetyError)).toEqual(expectedAction);
  });
});
