import { Authentication } from '../entities';

export interface LogInService {
  // eslint-disable-next-line no-unused-vars
  logIn: (username: string, password: string) => Promise<Authentication>
}

export class LogInServiceInteractor {
  private _logInService;

  constructor(logInService: LogInService) {
    this._logInService = logInService;
  }

  logIn(username: string, password: string) {
    return this._logInService.logIn(username, password);
  }
}
