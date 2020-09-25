import { AuthenticationAction } from '../actions';

export const authReducer = (state: string = null, action: any) => {
  switch (action.type) {
    case AuthenticationAction.SET_AUTH:
      return action.id;
    default:
      return state;
  }
};
