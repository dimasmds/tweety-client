import { UserGetterService } from '../useCase';
import { User } from '../entities';
import { EndpointAPI } from '../../config';

export class UserService implements UserGetterService {
  async getUserById(userId: string): Promise<User> {
    const response = await fetch(EndpointAPI.getUserById(userId));
    const { user } = await response.json();

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
