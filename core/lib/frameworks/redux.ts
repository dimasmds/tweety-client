import { createStore, combineReducers } from 'redux';
import { tweetsReducers } from '../_tweets/adapters/redux/reducers';
import { middlewares } from '../_tweets/adapters/redux/middlewares';

const rootReducer = {
  tweets: tweetsReducers,
};

export const store = createStore(
  combineReducers(rootReducer),
  middlewares(),
);
