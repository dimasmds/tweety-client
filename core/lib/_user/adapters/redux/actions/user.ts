import { User } from '../../../entities';
import { setLoadingAction, setReadyAction } from '../../../../_shared/loading/adapters/redux';
import { UserService } from '../../../services';
import { UserGetterServiceInteractor } from '../../../useCase';
import { addErrorAction } from '../../../../_shared/error/adapters/redux';

export const UserAction = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

export const receiveUsersAction = (user: User) => ({
  type: UserAction.RECEIVE_USERS,
  user,
});

export const handleLoggedUser = (userId: string) => async (dispatch: any) => {
  dispatch(setLoadingAction());
  const service = new UserService();
  const interactor = new UserGetterServiceInteractor(service);

  try {
    const users = await interactor.getUserById(userId);
    dispatch(receiveUsersAction(users));
  } catch (error) {
    dispatch(addErrorAction({
      userMessage: error.message || 'Are you logged in?',
      originalMessage: error.message,
      date: new Date().toISOString(),
    }));
  }

  dispatch(setReadyAction());
};
