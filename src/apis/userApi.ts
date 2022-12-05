import http from '@/plugins/axios';
interface UserInterface {
  token: string;
}

export interface IUserInfo {
  name: string;
  head: string;
  permissons: string[];
}

export interface ILoginData {
  username: string;
  password: string;
}

export const getUserInfoApi = (data: ILoginData) => {
  return http.request<UserInterface>({
    method: 'post',
    url: '/api/user',
    data
  });
};

export const getInfoApi = () => {
  return http.request<IUserInfo>({
    method: 'get',
    url: '/api/user/info'
  });
};
