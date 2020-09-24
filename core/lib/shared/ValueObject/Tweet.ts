interface Tweet {
  id: string
  tweet: string
  date: string
  author: string
  retweets: Array<string> | null
  likes: Array<string> | null
  isDeleted: boolean,
  replyTo: string | null
}

export default Tweet;
