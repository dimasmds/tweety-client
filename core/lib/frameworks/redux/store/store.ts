import { createStore, combineReducers } from 'redux';
import { middlewares } from '../middlewares';
import { tweetsReducers } from '../../../_tweets/adapters/redux/reducers';
import { loadingReducer } from '../../../_shared/loading/adapters/redux';
import { usersReducer } from '../../../_users/adapters/redux/reducers';
import { authReducer } from '../../../_authentication/adapters/redux/reducers';
import { errorReducer } from '../../../_shared/error/adapters/redux';

const rootReducer = {
  tweets: tweetsReducers,
  users: usersReducer,
  loading: loadingReducer,
  auth: authReducer,
  error: errorReducer,
};

export const store = createStore(
  combineReducers(rootReducer),
  middlewares(),
);
