import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import { Tweet } from '../../../../../lib/_Tweets/entities';
import {
  handleAddTweet,
  handleInitialTweets,
  receiveTweetsAction,
  TweetAction,
} from '../../../../../lib/_Tweets/adapters/redux/actions';
import { mockedTweets, mockNewTweet } from '../../../__mocks__/tweet';
import { EndpointAPI } from '../../../../../lib/config';
import { LoadingAction } from '../../../../../lib/_Shared/loading/adapters/redux';
import { ToastActions } from '../../../../../lib/_Shared/toast/adapters/redux';

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

  it('should create RECEIVE_TWEETS when fetching _Tweets has been done', async () => {
    fetchMock.getOnce(EndpointAPI.getAllTweets, {
      body: { tweets: mockedTweets },
    });

    const expectedActions = [
      { type: LoadingAction.LOADING },
      { type: TweetAction.RECEIVE_TWEETS, tweets: mockedTweets },
      { type: LoadingAction.READY },
    ];
    const store = mockStore({ tweets: [] });

    // @ts-ignore
    await store.dispatch(handleInitialTweets());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create action correctly when adding has been done', async () => {
    fetchMock.postOnce(EndpointAPI.addNewTweet, {
      body: { message: 'Tweet Added!' },
    });

    fetchMock.getOnce(EndpointAPI.getAllTweets, {
      body: { tweets: mockedTweets },
    }, { overwriteRoutes: true });

    const expectedActions = [
      {
        type: LoadingAction.LOADING,
      },
      {
        type: ToastActions.SET_TOAST,
        toastPayload: { title: 'Tweet Added!', message: '' },
      },
      {
        type: LoadingAction.LOADING,
      },
      {
        type: LoadingAction.READY,
      },
    ];

    const store = mockStore({ tweets: [] });

    // @ts-ignore
    await store.dispatch(handleAddTweet(mockNewTweet));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
