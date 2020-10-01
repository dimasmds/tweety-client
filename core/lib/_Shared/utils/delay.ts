export const delay = (millisecond: number) => new Promise((resolve) => {
  setTimeout(resolve, millisecond);
});
