import { TweetyError } from '../../entities';
import { delay } from '../../../utils';

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

export const handleAddError = (error: TweetyError) => async (dispatch: any) => {
  dispatch(addErrorAction(error));
  await delay(5000);
  dispatch(removeErrorAction());
};
