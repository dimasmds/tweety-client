import { TweetyError } from '../../entities';

export const ErrorAction = {
  SET_ERROR: 'SET_ERROR',
};

export const addErrorAction = (error: TweetyError) => ({
  type: ErrorAction.SET_ERROR,
  error,
});
