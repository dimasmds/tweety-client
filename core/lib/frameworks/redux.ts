import { createStore, combineReducers } from 'redux';
import { tweetsReducers } from '../_tweets/adapters/redux/reducers';
import { middlewares } from '../_tweets/adapters/redux/middlewares';
import { loadingReducer } from '../_shared/loading/adapters/redux';

const rootReducer = {
  tweets: tweetsReducers,
  loading: loadingReducer,
};

export const store = createStore(
  combineReducers(rootReducer),
  middlewares(),
);
