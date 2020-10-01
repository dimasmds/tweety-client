import { tweetsReducers } from '../../../../../lib/_Tweets/adapters/redux/reducers';
import { TweetAction } from '../../../../../lib/_Tweets/adapters/redux/actions';
import { mockedTweets, mockNewTweet } from '../../../__mocks__/tweet';

describe('Tweets Reducer', () => {
  it('should return the initial state', () => {
    expect(tweetsReducers(undefined, {})).toEqual([]);
  });

  it('should handle RECEIVE_DATA correctly', () => {
    expect(tweetsReducers([], {
      type: TweetAction.RECEIVE_TWEETS,
      tweets: mockedTweets,
    }))
      .toEqual(mockedTweets);
  });
});
