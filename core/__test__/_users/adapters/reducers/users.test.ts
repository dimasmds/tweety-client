describe('Users Reducers', () => {
  it('should return initial data correctly', () => {
    expect(userReducer(undefined, {})).toEqual([]);
  });
});
