import { RegisterUserService, UserGetterService } from '../useCase';
import { NewUser, User } from '../entities';
import { EndpointAPI } from '../../config';

export class UserService implements UserGetterService, RegisterUserService {
  async getAllUsers(): Promise<Array<User>> {
    try {
      const response = await fetch(EndpointAPI.getAllUsers);
      const { users } = await response.json();
      return users;
    } catch (error) {
      throw new Error(error);
    }
  }

  async registerUser(newUser: NewUser): Promise<void> {
    const response = await fetch(EndpointAPI.registerUser, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    const { status, statusText } = response;

    if (status !== 200) {
      const { message } = await response.json();
      throw new Error(message || statusText);
    }
  }
}
