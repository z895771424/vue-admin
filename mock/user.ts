// test.ts

import { Random } from 'mockjs';
import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/api/get',
    method: 'get',
    response: () => {
      return {
        code: 200,
        result: {
          name: '隆隆测试数据'
        }
      };
    }
  },
  {
    url: '/api/user',
    method: 'post',
    response: () => {
      return {
        code: 200,
        result: {
          token: Random.string(14)
        }
      };
    }
  },
  {
    url: '/api/user/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        result: {
          name: '兴隆',
          head: '/images/head.jpg',
          permissons: ['baseEditor','markdownEditor']
        }
      };
    }
  }
] as MockMethod[];
