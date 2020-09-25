import { User } from '../../../entities';
import { setLoadingAction, setReadyAction } from '../../../../_shared/loading/adapters/redux';
import { UserService } from '../../../services';
import { UserGetterServiceInteractor } from '../../../useCase';

export const receiveUsersAction = (users: Array<User>) => ({
  type: 'RECEIVE_USERS',
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
