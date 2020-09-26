import { NewUser, User } from '../../../entities';
import { setLoadingAction, setReadyAction } from '../../../../_shared/loading/adapters/redux';
import { UserService } from '../../../services';
import { RegisterUserServiceInteractor, UserGetterServiceInteractor } from '../../../useCase';
import { addErrorAction } from '../../../../_shared/error/adapters/redux';

export const UserAction = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

export const receiveUsersAction = (users: Array<User>) => ({
  type: UserAction.RECEIVE_USERS,
  users,
});

export const handleInitialUsers = () => async (dispatch: any) => {
  dispatch(setLoadingAction());
  const service = new UserService();
  const interactor = new UserGetterServiceInteractor(service);

  const users = await interactor.getAllUsers();
  dispatch(receiveUsersAction(users));
  dispatch(setReadyAction());
};

export const handleRegisterUser = (newUser: NewUser) => async (dispatch: any) => {
  dispatch(setLoadingAction());
  const service = new UserService();
  const interactor = new RegisterUserServiceInteractor(service);

  try {
    await interactor.registerUser(newUser);
  } catch ({ message }) {
    dispatch(addErrorAction({
      userMessage: message || 'Failed to register, try again!',
      originalMessage: message,
    }));
  }

  dispatch(setReadyAction());
};
