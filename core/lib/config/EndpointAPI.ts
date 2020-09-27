export const BASE_URL = 'https://vast-falls-98498.herokuapp.com';
export const EndpointAPI = {
  getAllTweets: `${BASE_URL}/tweets`,
  addNewTweet: `${BASE_URL}/add`,
  getAllUsers: `${BASE_URL}/users`,
  logIn: `${BASE_URL}/user/login`,
  registerUser: `${BASE_URL}/user/add`,
  getUserById: (userId: string) => `${BASE_URL}/user/${userId}`,
};
