import { createStore, combineReducers } from 'redux';
import { tweetsReducers } from '../../../_tweets/adapters/redux/reducers';
import { middlewares } from '../middlewares';
import { loadingReducer } from '../../../_shared/loading/adapters/redux';
import { usersReducer } from '../../../_users/adapters/redux/reducers';

const rootReducer = {
  tweets: tweetsReducers,
  users: usersReducer,
  loading: loadingReducer,
};

export const store = createStore(
  combineReducers(rootReducer),
  middlewares(),
);
