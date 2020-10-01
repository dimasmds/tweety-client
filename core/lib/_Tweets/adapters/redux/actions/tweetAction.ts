import { TweetGetterServiceInteractor, TweetAddingServiceInteractor } from '../../../useCase';
import { TweetService } from '../../../services';
import { NewTweet, Tweet } from '../../../entities';
import { setLoadingAction, setReadyAction } from '../../../../_Shared/loading/adapters/redux';
import { handleSetToast } from '../../../../_Shared/toast/adapters/redux';
import { handleAddError } from '../../../../_Shared/error/adapters/redux';

const TweetAction = {
  RECEIVE_TWEETS: 'RECEIVE_TWEETS',
  ADD_TWEETS: 'ADD_TWEETS',
  RETWEET: 'RETWEET',
  LIKE_TWEET: 'LIKE_TWEET',
  DELETE_TWEET: 'DELETE_TWEET',
};

const receiveTweetsAction = (tweets: Array<Tweet>) => ({
  type: TweetAction.RECEIVE_TWEETS,
  tweets,
});

const handleInitialTweets = () => async (dispatch: any) => {
  dispatch(setLoadingAction());
  const services = new TweetService();
  const interactor = new TweetGetterServiceInteractor(services);

  const tweets = await interactor.getAllTweets();
  dispatch(receiveTweetsAction(tweets));
  dispatch(setReadyAction());
};

const handleAddTweet = (newTweet: NewTweet) => async (dispatch: any) => {
  dispatch(setLoadingAction());
  const services = new TweetService();
  const interactor = new TweetAddingServiceInteractor(services);

  try {
    const message = await interactor.addNewTweet(newTweet);
    dispatch(handleSetToast({
      title: message,
      message: '',
    }));
    dispatch(handleInitialTweets());
  } catch (error) {
    dispatch(handleAddError({
      userMessage: error.message || 'Failed to add tweet, try again!',
      originalMessage: error.message,
      date: new Date().toISOString(),
    }));
  }

  dispatch(setReadyAction());
};

export {
  TweetAction, receiveTweetsAction, handleInitialTweets, handleAddTweet,
};
