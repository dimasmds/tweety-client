import { TweetyError } from '../../entities';

export const ErrorAction = {
  SET_ERROR: 'SET_ERROR',
  REMOVE_ERROR: 'REMOVE_ERROR',
};

export const addErrorAction = (error: TweetyError) => ({
  type: ErrorAction.SET_ERROR,
  error,
});

export const removeErrorAction = () => ({
  type: ErrorAction.REMOVE_ERROR,
});
