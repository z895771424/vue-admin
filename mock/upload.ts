import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/api/upload/img',
    method: 'post',
    response: () => {
      return {
        code: 200,
        result: {
          url: '/images/head.jpg'
        }
      };
    }
  }
] as MockMethod[];
