import AsyncStorage from '@react-native-community/async-storage';
import {
  GetAuthService, LogInService, LogOutService, RegisterAuthService,
} from '../useCases';
import { Authentication, RegisterUser } from '../entities';
import { EndpointAPI } from '../../config';

export class AuthenticationService implements LogInService, GetAuthService,
  LogOutService, RegisterAuthService {
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

  async register(user: RegisterUser): Promise<string> {
    const response = await fetch(EndpointAPI.registerUser, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const { status, statusText } = response;

    if (status !== 200) {
      const { message } = await response.json();
      throw new Error(message || statusText);
    }
    const { userId } = await response.json();
    await this._saveIdToStorage(userId);
    return userId;
  }
}
