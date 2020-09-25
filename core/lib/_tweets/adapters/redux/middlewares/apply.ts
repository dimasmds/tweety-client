import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from './logger';

export const middlewares = () => {
  const _middlewares: Array<any> = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    _middlewares.push(logger);
  }

  return applyMiddleware(..._middlewares);
};
