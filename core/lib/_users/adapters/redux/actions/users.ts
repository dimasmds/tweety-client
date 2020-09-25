import { User } from '../../../entities/User';

export const receiveUsersAction = (users: Array<User>) => ({
  type: 'RECEIVE_USERS',
  users,
});
