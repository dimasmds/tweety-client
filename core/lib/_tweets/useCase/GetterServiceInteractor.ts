/* eslint-disable no-unused-vars */
import { Tweet } from '../entities';

export interface GetterService {
  getAllTweets: () => Promise<Array<Tweet>>
  getTweet: (id: string) => Promise<Tweet>
}

export class GetterServiceInteractor {
  private _getterServices: GetterService;

  constructor(getterService: GetterService) {
    this._getterServices = getterService;
  }

  async getAllTweets() {
    return this._getterServices.getAllTweets();
  }

  async getTweet(id: string) {
    return this._getterServices.getTweet(id);
  }
}
