import { UserAction } from '../actions';
import { User } from '../../../entities';

export const usersReducer = (state: Array<User> = [], action: any) => {
  switch (action.type) {
    case UserAction.RECEIVE_USERS:
      return action.users;
    default:
      return state;
  }
};
