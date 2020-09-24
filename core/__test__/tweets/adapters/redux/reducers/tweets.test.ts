import { tweetsReducers } from '../../../../../lib/tweets/adapters/redux/reducers';
import { TweetAction } from '../../../../../lib/tweets/adapters/redux/actions';
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

  it('should handle ADD_TWEET correctly', () => {
    expect(tweetsReducers([], {
      type: TweetAction.ADD_TWEETS,
      newTweet: mockNewTweet,
    }))
      .toEqual([{ ...mockNewTweet }]);
  });
});
