import { NewTweet } from '../entities';

export interface AddingService {
  // eslint-disable-next-line no-unused-vars
  addNewTweet: (newTweet: NewTweet) => Promise<any>
}

export class AddingServiceInteractor {
  private _addingService: AddingService;

  constructor(service: AddingService) {
    this._addingService = service;
  }

  addNewTweet(newTweet: NewTweet) {
    return this._addingService.addNewTweet(newTweet);
  }
}
