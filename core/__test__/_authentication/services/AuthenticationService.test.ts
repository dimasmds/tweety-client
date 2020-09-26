import fetchMock from 'fetch-mock';
import { AuthenticationService } from '../../../lib/_authentication/services';
import { EndpointAPI } from '../../../lib/config';

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
    });

    const services = new AuthenticationService();
    const spySaveIdToStorage = jest.spyOn(AuthenticationService.prototype as any, '_saveIdToStorage');

    await services.logIn('fakeUsername', 'fakePassword');
    expect(spySaveIdToStorage).toBeCalledWith('fakeUserId');
  });
});
