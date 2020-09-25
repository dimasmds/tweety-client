export const AuthenticationAction = {
  LOG_IN: 'LOG_IN',
};

export const logInAction = (username: string) => ({
  type: AuthenticationAction.LOG_IN,
  username,
});
