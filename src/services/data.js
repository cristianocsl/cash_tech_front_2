import http from './config';

export default {
  list: async () => http.get(),
};
