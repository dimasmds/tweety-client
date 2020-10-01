import fetchMock from 'fetch-mock';
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthenticationService } from '../../../lib/_Authentication/services';
import { EndpointAPI } from '../../../lib/config';

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

describe('Authentication Service', () => {
  it('should call request login to API when user login', async () => {
    fetchMock.postOnce(EndpointAPI.logIn, {
      body: { userId: 'fakeUserId' },
    });

    const spyRequestLoginToAPI = jest.spyOn(AuthenticationService.prototype as any, '_requestLoginToAPI');

    const service = new AuthenticationService();
    await service.logIn('fakeUsername', 'fakePassword');
    expect(spyRequestLoginToAPI).toBeCalledWith('fakeUsername', 'fakePassword');
  });

  it('should save auth id when login was successfully', async () => {
    fetchMock.postOnce(EndpointAPI.logIn, {
      body: { userId: 'fakeUserId' },
    }, { overwriteRoutes: true });

    const services = new AuthenticationService();
    const spySaveIdToStorage = jest.spyOn(AuthenticationService.prototype as any, '_saveIdToStorage');

    await services.logIn('fakeUsername', 'fakePassword');
    expect(spySaveIdToStorage).toBeCalledWith('fakeUserId');
  });

  it('should save to AsyncStorage when save auth id was called', async () => {
    fetchMock.postOnce(EndpointAPI.logIn, {
      body: { userId: 'fakeUserId' },
    }, { overwriteRoutes: true });
    const service = new AuthenticationService();
    await service.logIn('fakeUsername', 'fakePassword');

    expect(AsyncStorage.setItem).toBeCalledWith('AUTH_ID', 'fakeUserId');
  });
});
