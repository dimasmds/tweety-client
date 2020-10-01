import { UserAction } from '../actions';
import { LoggedUser } from '../../../entities';

export const userReducer = (state: LoggedUser = null, action: any) => {
  switch (action.type) {
    case UserAction.RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
};
