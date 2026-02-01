import { requestErrorInterceptor, requestInterceptor } from "@lib/api/request-interceptor";
import { responseErrorInterceptor, responseInterceptor } from "@lib/api/response-interceptor";
import $axios from "axios";

const axios = $axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
});

axios.interceptors.request.use(requestInterceptor, requestErrorInterceptor);
axios.interceptors.response.use(responseInterceptor, responseErrorInterceptor);

export default axios;
