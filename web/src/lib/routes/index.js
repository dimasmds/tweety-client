const routes = [
  {
    name: 'timeline',
    pattern: '',
    data: { title: 'Timeline' },
  },
  {
    name: 'user',
    pattern: 'user/:id',
  },
  {
    name: 'not-found',
    pattern: '*',
  },
  {
    name: 'register',
    pattern: 'register',
  },
  {
    name: 'logout',
    pattern: 'logout',
  },
];

export default routes;
