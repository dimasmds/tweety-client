import { ToastPayload } from '../../entities';
import { ToastActions } from './actions';

export const toastReducer = (state: ToastPayload = null, action: any) => {
  switch (action.type) {
    case ToastActions.SET_TOAST:
      return action.toastPayload;
    case ToastActions.REMOVE_TOAST:
      return null;
    default:
      return state;
  }
};
