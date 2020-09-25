import { LoadingAction } from './action';

// eslint-disable-next-line no-unused-vars
export const loadingReducer = (state = false, action: any) => action.type === LoadingAction.LOADING;
