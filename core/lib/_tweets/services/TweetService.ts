import { TweetAddingService, TweetGetterService } from '../useCase';
import { NewTweet, Tweet } from '../entities';
import { EndpointAPI } from '../../config';

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

  async getTweet(id: string): Promise<Tweet> {
    return Promise.resolve(undefined);
  }

  async addNewTweet(newTweet: NewTweet): Promise<any> {
    const response = await fetch(EndpointAPI.addNewTweet, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTweet),
    });
    const { status } = response;

    if (status !== 200) {
      const { message } = await response.json();
      throw new Error(message);
    }

    const { message } = await response.json();
    return message;
  }
}
