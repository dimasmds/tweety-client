import { GetterService } from '../useCase';
import { Tweet } from '../entities';
import { EndpointAPI } from '../../shared';

export class TweetService implements GetterService {
  async getAllTweets(): Promise<Array<Tweet>> {
    try {
      const response = await fetch(EndpointAPI.getAllTweets);
      const { tweets } = await response.json();
      return tweets;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getTweet(id: string): Promise<Tweet> {
    return Promise.resolve(undefined);
  }
}
