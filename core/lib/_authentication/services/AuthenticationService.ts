import AsyncStorage from '@react-native-community/async-storage';
import { LogInService } from '../useCases';
import { Authentication } from '../entities';
import { EndpointAPI } from '../../config';

export class AuthenticationService implements LogInService {
  async logIn(username: string, password: string): Promise<Authentication> {
    try {
      const authentication: Authentication = await this._requestLoginToAPI(username, password);
      await this._saveIdToStorage(authentication.userId);
      return authentication;
    } catch (error) {
      throw new Error(error);
    }
  }

  private async _requestLoginToAPI(username: string, password: string) {
    try {
      const response = await fetch(EndpointAPI.logIn, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }

  private async _saveIdToStorage(id: string) {
    try {
      await AsyncStorage.setItem('AUTH_ID', id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
