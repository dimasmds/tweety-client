import { UserAction } from '../actions';
import { User } from '../../../entities';

export const userReducer = (state: User = null, action: any) => {
  switch (action.type) {
    case UserAction.RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
};
