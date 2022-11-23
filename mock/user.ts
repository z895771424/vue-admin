// test.ts

import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/api/get',
    method: 'get',
    response: () => {
      return {
        code: 0,
        result: {
          name: '隆隆测试数据'
        }
      };
    }
  }
] as MockMethod[];
