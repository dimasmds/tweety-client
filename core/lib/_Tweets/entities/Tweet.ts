import { Author } from './Author';

export interface Tweet {
  id: string
  tweet: string
  date: string
  author: Author
  retweets?: Array<string>
  likes?: Array<string>
  isDeleted: boolean,
  replyTo?: string
}
