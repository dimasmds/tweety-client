import { createStore, combineReducers } from 'redux';
import { middlewares } from '../middlewares';
import { tweetsReducers } from '../../../_Tweets/adapters/redux/reducers';
import { loadingReducer } from '../../../_Shared/loading/adapters/redux';
import { userReducer } from '../../../_User/adapters/redux/reducers';
import { authReducer } from '../../../_Authentication/adapters/redux/reducers';
import { errorReducer } from '../../../_Shared/error/adapters/redux';
import { toastReducer } from '../../../_Shared/toast/adapters/redux';

const rootReducer = {
  tweets: tweetsReducers,
  user: userReducer,
  loading: loadingReducer,
  auth: authReducer,
  error: errorReducer,
  toast: toastReducer,
};

export const store = createStore(
  combineReducers(rootReducer),
  middlewares(),
);
