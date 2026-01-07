import Axios from "axios";
import { requestErrorInterceptor, requestInterceptor } from "@/config/request-interceptor.config";
import {
  responseErrorInterceptor,
  responseInterceptor
} from "@/config/response-interceptor.config";

const axios = Axios.create({
  baseURL: process.env.BASE_URL
});

axios.interceptors.request.use(requestInterceptor, requestErrorInterceptor);
axios.interceptors.response.use(responseInterceptor, responseErrorInterceptor);

export default axios;
