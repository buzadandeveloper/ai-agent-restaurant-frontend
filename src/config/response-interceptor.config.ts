import type { AxiosError, AxiosResponse } from "axios";

const responseInterceptor = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const responseErrorInterceptor = async (error: AxiosError) => {
  return Promise.reject(error);
};

export { responseInterceptor, responseErrorInterceptor };
