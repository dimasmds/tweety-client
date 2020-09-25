/* eslint-disable no-unused-vars */
import { Tweet } from '../entities';

export interface TweetGetterService {
  getAllTweets: () => Promise<Array<Tweet>>
  getTweet: (id: string) => Promise<Tweet>
}

export class TweetGetterServiceInteractor {
  private _getterServices: TweetGetterService;

  constructor(getterService: TweetGetterService) {
    this._getterServices = getterService;
  }

  async getAllTweets() {
    return this._getterServices.getAllTweets();
  }

  async getTweet(id: string) {
    return this._getterServices.getTweet(id);
  }
}
