import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import { Tweet } from '../../../../lib/tweets/entities';
import {
  addNewTweetAction,
  handleInitialTweets,
  receiveTweetsAction,
  TweetAction,
} from '../../../../lib/tweets/redux/actions';
import { mockedTweets, mockNewTweet } from '../../__mocks__/tweet';
import { EndpointAPI } from '../../../../lib/shared';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Tweet Action', () => {
  it('should create an actions to receive tweet correctly', () => {
    const tweets: Array<Tweet> = mockedTweets;

    const expectedAction = {
      type: TweetAction.RECEIVE_TWEETS,
      tweets,
    };

    expect(receiveTweetsAction(tweets)).toEqual(expectedAction);
  });

  it('should create RECEIVE_TWEETS when fetching tweets has been done', async () => {
    fetchMock.getOnce(EndpointAPI.getAllTweets, {
      body: { tweets: mockedTweets },
    });

    const expectedActions = [{ type: TweetAction.RECEIVE_TWEETS, tweets: mockedTweets }];
    const store = mockStore({ tweets: [] });

    // @ts-ignore
    await store.dispatch(handleInitialTweets());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an action to add tweet correctly', () => {
    const newTweet = mockNewTweet;

    const expectedAction = {
      type: TweetAction.ADD_TWEETS,
      newTweet,
    };

    expect(addNewTweetAction(newTweet))
      .toEqual(expectedAction);
  });

  it('should create ADD_TWEETS when adding has been done', async () => {
    fetchMock.postOnce(EndpointAPI.addNewTweet, {
      body: { message: 'Tweet Added!' },
    });

    const expectedActions = [
      {
        type: TweetAction.ADD_TWEETS,
        newTweet: mockNewTweet,
      },
    ];

    const store = mockStore({ tweets: [] });

    await store.dispatch(handleAddData(mockNewTweet));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
