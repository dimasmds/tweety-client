export interface Tweet {
  id: string
  tweet: string
  date: string
  author: string
  retweets?: Array<string>
  likes?: Array<string>
  isDeleted: boolean,
  replyTo?: string
}
