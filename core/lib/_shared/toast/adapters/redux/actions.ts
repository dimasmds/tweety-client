import { ToastPayload } from '../../entities';
import { delay } from '../../../utils';

export const ToastActions = {
  SET_TOAST: 'SET_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
};

const setToastAction = (toastPayload: ToastPayload) => ({
  type: ToastActions.SET_TOAST,
  toastPayload,
});

const removeToastAction = () => ({
  type: ToastActions.REMOVE_TOAST,
});

export const handleSetToast = (toastPayload: ToastPayload) => async (dispatch: any) => {
  dispatch(setToastAction(toastPayload));
  await delay(5000);
  dispatch(removeToastAction());
};
