import type { AxiosError, AxiosResponse } from "axios";
import { showToast } from "@/lib/show-toast";

const responseInterceptor = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const responseErrorInterceptor = async (error: AxiosError) => {
  showToast({ title: "Error", description: "Something went wrong.", variant: "destructive" });

  return Promise.reject(error);
};

export { responseInterceptor, responseErrorInterceptor };
