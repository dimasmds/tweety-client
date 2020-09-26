export interface LogOutService {
  LogOut: () => Promise<void>
}

export class LogOutServiceInteractor {
  private _logOutService: LogOutService;

  constructor(logOutService: LogOutService) {
    this._logOutService = logOutService;
  }

  async logOut() {
    await this._logOutService.LogOut;
  }
}
