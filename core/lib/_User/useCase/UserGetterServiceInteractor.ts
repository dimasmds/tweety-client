import { User } from '../entities';

export interface UserGetterService {
  getUserById: (userId: string) => Promise<User>
}

export class UserGetterServiceInteractor {
  private _getterService: UserGetterService;

  constructor(getterService: UserGetterService) {
    this._getterService = getterService;
  }

  getUserById(userId: string): Promise<User> {
    return this._getterService.getUserById(userId);
  }
}
