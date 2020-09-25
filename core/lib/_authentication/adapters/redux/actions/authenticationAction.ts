import { setLoadingAction, setReadyAction } from '../../../../_shared/loading/adapters/redux';
import { AuthenticationService } from '../../../services';
import { LogInServiceInteractor } from '../../../useCases';
import { Authentication } from '../../../entities';

export const AuthenticationAction = {
  LOG_IN: 'LOG_IN',
};

export const setAuthUserAction = (id: string) => ({
  type: AuthenticationAction.LOG_IN,
  id,
});

export const handleLogin = (username: string, password: string) => async (dispatch: any) => {
  dispatch(setLoadingAction());
  const services = new AuthenticationService();
  const interactor = new LogInServiceInteractor(services);
  const { success, userId }: Authentication = await interactor.logIn(username, password);
  if (success) {
    dispatch(setAuthUserAction(userId));
  }
  dispatch(setReadyAction());
};
