import http from '@/plugins/axios';

interface IUploadImage {
  url: string;
}

export const uploadImageApi = (data: FormData) => {
  return http.request<IUploadImage>({
    method: 'post',
    url: '/api/upload/img',
    data
  });
};
