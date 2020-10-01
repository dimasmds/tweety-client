export const LoadingAction = {
  LOADING: 'LOADING',
  READY: 'READY',
};

export const setLoadingAction = () => ({
  type: LoadingAction.LOADING,
});

export const setReadyAction = () => ({
  type: LoadingAction.READY,
});
