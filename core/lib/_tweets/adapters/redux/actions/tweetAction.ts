import { GetterServiceInteractor } from '../../../useCase';
import { TweetService } from '../../../services';
import { NewTweet, Tweet } from '../../../entities';
import { AddingServiceInteractor } from '../../../useCase/AddingServiceInteractor';
import { setLoadingAction, setReadyAction } from '../../../../_shared/loading/adapters/redux';

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

const addNewTweetAction = (newTweet: NewTweet) => ({
  type: TweetAction.ADD_TWEETS,
  newTweet,
});

const handleInitialTweets = () => async (dispatch: any) => {
  dispatch(setLoadingAction());
  const services = new TweetService();
  const interactor = new GetterServiceInteractor(services);

  const tweets = await interactor.getAllTweets();
  dispatch(receiveTweetsAction(tweets));
  dispatch(setReadyAction());
};

const handleAddTweet = (newTweet: NewTweet) => async (dispatch: any) => {
  const services = new TweetService();
  const interactor = new AddingServiceInteractor(services);

  const status = await interactor.addNewTweet(newTweet);
  if (status !== 200) {
    return;
  }
  dispatch(addNewTweetAction(newTweet));
};

export {
  TweetAction, receiveTweetsAction, handleInitialTweets, addNewTweetAction, handleAddTweet,
};