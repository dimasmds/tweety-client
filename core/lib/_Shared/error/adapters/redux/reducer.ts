import { TweetyError } from '../../entities';
import { ErrorAction } from './actions';

export const errorReducer = (state: TweetyError = null, action: any) => {
  switch (action.type) {
    case ErrorAction.SET_ERROR:
      return action.error;
    case ErrorAction.REMOVE_ERROR:
      return null;
    default:
      return state;
  }
};
