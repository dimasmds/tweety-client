import { User } from '../entities';

export interface GetterService {
  getAllUsers: () => Promise<Array<User>>
}

export class GetterServiceInteractor {
  private _getterService: GetterService;

  constructor(getterService: GetterService) {
    this._getterService = getterService;
  }

  getAllUsers() {
    return this._getterService.getAllUsers();
  }
}
