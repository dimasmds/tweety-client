import { RegisterUser } from '../entities';

export interface RegisterAuthService {
  register : (user: RegisterUser) => Promise<string>;
}

export class RegisterAuthServiceInteractor {
  private _registerAuthService: RegisterAuthService;

  constructor(registerAuthService: RegisterAuthService) {
    this._registerAuthService = registerAuthService;
  }

  register(user: RegisterUser): Promise<string> {
    return this._registerAuthService.register(user);
  }
}
