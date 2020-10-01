import { LoggedUser } from '../entities';

export interface UserGetterService {
  getUserById: (userId: string) => Promise<LoggedUser>
}

export class UserGetterServiceInteractor {
  private _getterService: UserGetterService;

  constructor(getterService: UserGetterService) {
    this._getterService = getterService;
  }

  getUserById(userId: string): Promise<LoggedUser> {
    return this._getterService.getUserById(userId);
  }
}
