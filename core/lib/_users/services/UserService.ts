import { UserGetterService } from '../useCase';
import { User } from '../entities';
import { EndpointAPI } from '../../config';

export class UserService implements UserGetterService {
  async getAllUsers(): Promise<Array<User>> {
    try {
      const response = await fetch(EndpointAPI.getAllUsers);
      const { users } = await response.json();
      return users;
    } catch (error) {
      throw new Error(error);
    }
  }
}
