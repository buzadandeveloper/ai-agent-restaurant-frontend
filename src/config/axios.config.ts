import $axios from "axios";
import { requestErrorInterceptor, requestInterceptor } from "./request-interceptor.config";
import { responseErrorInterceptor, responseInterceptor } from "./response-interceptor.config";

const axios = $axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
});

axios.interceptors.request.use(requestInterceptor, requestErrorInterceptor);
axios.interceptors.response.use(responseInterceptor, responseErrorInterceptor);

export default axios;
