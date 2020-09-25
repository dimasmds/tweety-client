import { createStore, combineReducers } from 'redux';
import { tweetsReducers } from '../tweets/adapters/redux/reducers';
import { middlewares } from '../tweets/adapters/redux/middlewares';

const rootReducer = {
  tweets: tweetsReducers,
};

export const store = createStore(
  combineReducers(rootReducer),
  middlewares(),
);
