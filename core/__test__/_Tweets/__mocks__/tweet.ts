import { Tweet, NewTweet } from '../../../lib/_Tweets/entities';

const mockedTweets: Array<Tweet> = [
  {
    id: 'tw-4n5pxq24kpiob12og9',
    tweet: 'lorem ipsum dolor sit amet',
    date: '2020-09-20 18:20:00',
    author: {
      id: 'usr-nbw2s2nkks9wmmw2kk',
      name: 'Dimas Maulana Dwi Saputra',
      username: 'dimasmds',
      avatarUrl: '',
    },
    retweets: ['usr-m9wwklks1nmjalsmcu1'],
    likes: ['usr-nbw2s2nkks9wmmw2kk', 'usr-m9wwklks1nmjalsmcu1'],
    isDeleted: false,
  },
  {
    id: 'tw-4n5pxq24kriob12ogd',
    tweet: 'Aku member JKT48',
    date: '2020-09-21 01:30:00',
    author: {
      id: 'usr-nbw2s2nkks9wmmw2kk',
      username: 'dimasmds',
      name: 'Dimas Maulana Dwi Saputra',
      avatarUrl: '',
    },
    likes: [
      'usr-m9wwklks1nmjalsmcu1',
    ],
    isDeleted: false,
  },
];

const mockedTweet: Tweet = {
  id: 'tw-4n5pxq24kpiob12og9',
  tweet: 'lorem ipsum dolor sit amet',
  date: '2020-09-20 18:20:00',
  author: {
    id: 'usr-nbw2s2nkks9wmmw2kk',
    username: 'dimasmds',
    name: 'Dimas Maulana Dwi Saputra',
    avatarUrl: '',
  },
  retweets: ['usr-m9wwklks1nmjalsmcu1'],
  likes: ['usr-nbw2s2nkks9wmmw2kk', 'usr-m9wwklks1nmjalsmcu1'],
  isDeleted: false,
};

const mockNewTweet: NewTweet = {
  author: 'usr-nbw2s22smm9m34',
  tweet: 'Aku member JKT48',
};

export { mockedTweets, mockedTweet, mockNewTweet };
