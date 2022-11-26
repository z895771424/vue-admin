import axios, { AxiosRequestConfig } from 'axios';

export default class Axios {
  private instance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.setInterceptors();
  }

  public request<T, D = ResponseResult<T>>(config: AxiosRequestConfig): Promise<D> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<D>(config);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  }

  private setInterceptors() {
    this.setReqInterceptors();
    this.setResInterceptors();
  }

  private setReqInterceptors() {
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  private setResInterceptors() {
    this.instance.interceptors.response.use(
      (response) => {
        // 2xx 范围内的状态码都会触发该函数
        return response;
      },
      (error) => {
        // 超出 2xx 范围内的状态码都会触发该函数
        return Promise.reject(error);
      }
    );
  }
}
