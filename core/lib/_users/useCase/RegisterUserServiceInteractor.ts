import { NewUser } from '../entities';

export interface RegisterUserService {
  // eslint-disable-next-line no-unused-vars
  registerUser(newUser: NewUser): Promise<void>
}

export class RegisterUserServiceInteractor {
  private _registerUserService: RegisterUserService;

  constructor(registerUserService: RegisterUserService) {
    this._registerUserService = registerUserService;
  }

  registerUser(newUser: NewUser) {
    return this._registerUserService.registerUser(newUser);
  }
}
