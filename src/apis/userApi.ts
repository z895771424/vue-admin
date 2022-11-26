import http from '@/plugins/axios';
interface UserInterface {
  token: string;
}

export const getUserInfoApi = (data: any) => {
  return http.request<UserInterface>({
    method: 'post',
    url: '/api/user',
    data
  });
};
