import { setLoadingAction, setReadyAction } from '../../../../_shared/loading/adapters/redux';
import { AuthenticationService } from '../../../services';
import {
  GetAuthServiceInteractor,
  LogInServiceInteractor,
  LogOutServiceInteractor,
  RegisterAuthServiceInteractor,
} from '../../../useCases';
import { Authentication, RegisterUser } from '../../../entities';
import { addErrorAction } from '../../../../_shared/error/adapters/redux';

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

export const handleLogout = () => async (dispatch: any) => {
  dispatch(setLoadingAction());
  const service = new AuthenticationService();
  const interactor = new LogOutServiceInteractor(service);
  await interactor.logOut();
  dispatch(removeAuthUserAction());
  dispatch(setReadyAction());
};

export const handleGetAuth = () => async (dispatch: any) => {
  dispatch(setLoadingAction());
  const service = new AuthenticationService();
  const interactor = new GetAuthServiceInteractor(service);
  const authId = await interactor.getAuth();
  dispatch(setAuthUserAction(authId));
  dispatch(setReadyAction());
};

export const handleLogin = (username: string, password: string) => async (dispatch: any) => {
  dispatch(setLoadingAction());
  const services = new AuthenticationService();
  const interactor = new LogInServiceInteractor(services);

  try {
    const { success, userId }: Authentication = await interactor.logIn(username, password);
    if (success) {
      dispatch(setAuthUserAction(userId));
    }
  } catch (error) {
    dispatch(addErrorAction({
      userMessage: 'Invalid username and password',
      originalMessage: error.message,
      date: new Date().toISOString(),
    }));
  }

  dispatch(setReadyAction());
};

export const handleRegister = (registerUser: RegisterUser) => async (dispatch: any) => {
  dispatch(setLoadingAction());
  const services = new AuthenticationService();
  const interactor = new RegisterAuthServiceInteractor(services);

  try {
    const userId: string = await interactor.register(registerUser);
    dispatch(setAuthUserAction(userId));
  } catch (error) {
    dispatch(addErrorAction({
      userMessage: error.message || 'Failed to Register, try again!',
      originalMessage: error.message,
      date: new Date().toISOString(),
    }));
  }

  dispatch(setReadyAction());
};
