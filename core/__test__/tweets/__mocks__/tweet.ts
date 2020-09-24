import { Tweet } from '../../../lib/tweets/entities/Tweet';

const mockedTweets: Array<Tweet> = [
  {
    id: 'tw-4n5pxq24kpiob12og9',
    tweet: 'lorem ipsum dolor sit amet',
    date: '2020-09-20 18:20:00',
    author: 'usr-nbw2s2nkks9wmmw2kk',
    retweets: ['usr-m9wwklks1nmjalsmcu1'],
    likes: ['usr-nbw2s2nkks9wmmw2kk', 'usr-m9wwklks1nmjalsmcu1'],
    isDeleted: false,
    replyTo: null,
  },
  {
    id: 'tw-4n5pxq24kriob12ogd',
    tweet: 'Aku member JKT48',
    date: '2020-09-21 01:30:00',
    author: 'usr-nbw2s2nkks9wmmw2kk',
    retweets: null,
    likes: [
      'usr-m9wwklks1nmjalsmcu1',
    ],
    isDeleted: false,
    replyTo: null,
  },
];

export { mockedTweets };
