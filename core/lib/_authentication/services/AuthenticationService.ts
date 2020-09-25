import { LogInService } from '../useCases';
import { Authentication } from '../entities';
import { EndpointAPI } from '../../config';

export class AuthenticationService implements LogInService {
  async logIn(username: string, password: string): Promise<Authentication> {
    try {
      const response = await fetch(EndpointAPI.logIn, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const { success, message, userId }: Authentication = await response.json();
      return { success, message, userId };
    } catch (error) {
      throw new Error(error);
    }
  }
}
