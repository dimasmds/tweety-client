import { setLoadingAction, setReadyAction } from '../../../../_shared/loading/adapters/redux';
import { AuthenticationService } from '../../../services';
import { LogInServiceInteractor } from '../../../useCases';
import { Authentication } from '../../../entities';

export const AuthenticationAction = {
  SET_AUTH: 'SET_AUTH',
  REMOVE_AUTH: 'REMOVE_AUTH',
};

export const setAuthUserAction = (id: string) => ({
  type: AuthenticationAction.SET_AUTH,
  id,
});

export const removeAuthUserAction = () => ({
  type: AuthenticationAction.REMOVE_AUTH,
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