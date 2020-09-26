export interface GetAuthService {
   getAuth(): Promise<string>
}

export class GetAuthServiceInteractor {
  private _getAuthService: GetAuthService;

  constructor(getAuthService: GetAuthService) {
    this._getAuthService = getAuthService;
  }

  async getAuth(): Promise<string> {
    return this._getAuthService.getAuth();
  }
}
