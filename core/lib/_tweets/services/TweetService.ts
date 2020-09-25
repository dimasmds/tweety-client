import { TweetGetterService } from '../useCase';
import { NewTweet, Tweet } from '../entities';
import { EndpointAPI } from '../../config';
import { TweetAddingService } from '../useCase/TweetAddingServiceInteractor';

export class TweetService implements TweetGetterService, TweetAddingService {
  async getAllTweets(): Promise<Array<Tweet>> {
    try {
      const response = await fetch(EndpointAPI.getAllTweets);
      const { tweets } = await response.json();
      return tweets;
    } catch (error) {
      throw new Error(error);
    }
  }

  // eslint-disable-next-line no-unused-vars
  async getTweet(id: string): Promise<Tweet> {
    return Promise.resolve(undefined);
  }

  async addNewTweet(newTweet: NewTweet): Promise<any> {
    try {
      const response = await fetch(EndpointAPI.addNewTweet, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTweet),
      });
      const { status } = response;
      return status;
    } catch (error) {
      throw new Error(error);
    }
  }
}
