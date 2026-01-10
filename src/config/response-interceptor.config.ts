import type { AxiosError, AxiosResponse } from "axios";
import { showToast } from "@/lib/show-toast";

const responseInterceptor = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const responseErrorInterceptor = async (error: AxiosError) => {
  if (error.response?.status === 401 && !window.location.href.includes("/authenticate")) {
    localStorage.removeItem("token");
    window.location.href = "/authenticate?tab=login";
  }

  if (error.response?.data) {
    const errorData = error.response.data as { message?: string };
    showToast({
      title: "Error",
      description: errorData.message || "Something went wrong",
      variant: "destructive"
    });
  }

  return Promise.reject(error);
};

export { responseInterceptor, responseErrorInterceptor };
