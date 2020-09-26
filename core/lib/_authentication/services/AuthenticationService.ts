import AsyncStorage from '@react-native-community/async-storage';
import { GetAuthService, LogInService, LogOutService } from '../useCases';
import { Authentication } from '../entities';
import { EndpointAPI } from '../../config';

export class AuthenticationService implements LogInService, GetAuthService, LogOutService {
  async logIn(username: string, password: string): Promise<Authentication> {
    const authentication: Authentication = await this._requestLoginToAPI(username, password);
    await this._saveIdToStorage(authentication.userId);
    return authentication;
  }

  async LogOut(): Promise<void> {
    try {
      return await AsyncStorage.removeItem('AUTH_ID');
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAuth(): Promise<string> {
    try {
      return await AsyncStorage.getItem('AUTH_ID');
    } catch (error) {
      return null;
    }
  }

  private async _requestLoginToAPI(username: string, password: string) {
    const response = await fetch(EndpointAPI.logIn, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    return response.json();
  }

  private async _saveIdToStorage(id: string) {
    try {
      await AsyncStorage.setItem('AUTH_ID', id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
