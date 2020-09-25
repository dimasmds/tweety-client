export const AuthenticationAction = {
  LOG_IN: 'LOG_IN',
};

export const logInAction = (id: string) => ({
  type: AuthenticationAction.LOG_IN,
  id,
});
