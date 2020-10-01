import { NewTweet } from '../entities';

export interface TweetAddingService {
  // eslint-disable-next-line no-unused-vars
  addNewTweet: (newTweet: NewTweet) => Promise<any>
}

export class TweetAddingServiceInteractor {
  private _addingService: TweetAddingService;

  constructor(service: TweetAddingService) {
    this._addingService = service;
  }

  addNewTweet(newTweet: NewTweet) {
    return this._addingService.addNewTweet(newTweet);
  }
}
