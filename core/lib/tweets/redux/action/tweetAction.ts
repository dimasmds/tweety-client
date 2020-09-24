import { Action, ActionCreator } from 'redux';
import { GetterServiceInteractor } from '../../useCase';
import { TweetService } from '../../services';
import { Tweet } from '../../entities';

const TweetAction = {
  RECEIVE_TWEETS: 'RECEIVE_TWEETS',
  ADD_TWEETS: 'ADD_TWEETS',
  RETWEET: 'RETWEET',
  LIKE_TWEET: 'LIKE_TWEET',
  DELETE_TWEET: 'DELETE_TWEET',
};

const receiveTweetsAction: ActionCreator<Action> = (tweets: Array<Tweet>) => ({
  type: TweetAction.RECEIVE_TWEETS,
  tweets,
});

const handleInitialData = () => async (dispatch: any) => {
  const services = new TweetService();
  const interactor = new GetterServiceInteractor(services);

  const tweets = await interactor.getAllTweets();
  dispatch(receiveTweetsAction(tweets));
};

export { TweetAction, receiveTweetsAction, handleInitialData };
