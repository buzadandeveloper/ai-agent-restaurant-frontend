import { showToast } from "@lib/show-toast";
import type { AxiosError, InternalAxiosRequestConfig } from "axios";

const requestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["Access-Control-Allow-Credentials"] = true;
  }

  return config;
};

const requestErrorInterceptor = async (error: AxiosError) => {
  showToast({ title: "Error", description: "Something went wrong.", variant: "destructive" });

  return Promise.reject(error);
};

export { requestInterceptor, requestErrorInterceptor };
