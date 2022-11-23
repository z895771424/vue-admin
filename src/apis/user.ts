import http from '@/plugins/axios';
interface User {
  name: string;
  age: number;
  avatar: string;
}

export const getUserInfoApi = () => {
  return http.request<User>({
    method: 'get',
    url: '/api/get'
  });
};
