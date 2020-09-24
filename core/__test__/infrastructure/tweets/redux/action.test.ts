import Tweet from '../../../../lib/shared/ValueObject/Tweet';
import { receiveTweetsAction, TweetAction } from '../../../../lib/infrastucture/tweets/redux/tweetAction';
import { mockedTweets } from '../__mocks__/tweet';

describe('Tweet Action', () => {
  it('should create an action to receive tweet correctly', () => {
    const tweets: Array<Tweet> = mockedTweets;

    const expectedAction = {
      type: TweetAction.RECEIVE_TWEETS,
      tweets,
    };

    expect(receiveTweetsAction(tweets)).toEqual(expectedAction);
  });
});
