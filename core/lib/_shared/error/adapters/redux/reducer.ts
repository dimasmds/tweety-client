import { TweetyError } from '../../entities';
import { ErrorAction } from './actions';

export const errorReducer = (state: TweetyError = {}, action: any) => {
  switch (action.type) {
    case ErrorAction.SET_ERROR:
      return action.error;
    default:
      return state;
  }
};
