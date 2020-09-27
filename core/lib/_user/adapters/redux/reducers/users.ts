import { UserAction } from '../actions';
import { User } from '../../../entities';

export const userReducer = (state: User = null, action: any) => {
  switch (action.type) {
    case UserAction.RECEIVE_USERS:
      return action.users;
    default:
      return state;
  }
};
