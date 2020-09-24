import { tweetsReducers } from '../../../../lib/tweets/redux/reducers';

describe('Tweets Reducer', () => {
  it('should return the initial state', () => {
    expect(tweetsReducers(undefined, {})).toEqual([]);
  });
});
