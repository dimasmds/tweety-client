import { Tweet } from '../../../entities';
import { TweetAction } from '../actions';

export const tweetsReducers = (state: Array<Tweet> = [], action: any) => {
  switch (action.type) {
    case TweetAction.RECEIVE_TWEETS:
      return action.tweets;
    case TweetAction.ADD_TWEETS:
      return [...state, action.newTweet];
    default:
      return state;
  }
};
