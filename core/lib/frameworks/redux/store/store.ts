import { createStore, combineReducers } from 'redux';
import { middlewares } from '../middlewares';
import { tweetsReducers } from '../../../_tweets/adapters/redux/reducers';
import { loadingReducer } from '../../../_shared/loading/adapters/redux';
import { usersReducer } from '../../../_users/adapters/redux/reducers';
import { authReducer } from '../../../_authentication/adapters/redux/reducers';

const rootReducer = {
  tweets: tweetsReducers,
  users: usersReducer,
  loading: loadingReducer,
  auth: authReducer,
};

export const store = createStore(
  combineReducers(rootReducer),
  middlewares(),
);
