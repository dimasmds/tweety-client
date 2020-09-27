import { User } from '../entities';

export interface UserGetterService {
  getAllUsers: () => Promise<Array<User>>
}

export class UserGetterServiceInteractor {
  private _getterService: UserGetterService;

  constructor(getterService: UserGetterService) {
    this._getterService = getterService;
  }

  getAllUsers() {
    return this._getterService.getAllUsers();
  }
}
