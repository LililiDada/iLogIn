import axios from "axios";
import { message } from "antd";
import { getToken } from "./cookies";
const service = axios.create({
  baseURL: "/devApi",
  timeout: 5000,
});

service.interceptors.request.use(
  function (config) {
    // config.headers["Content-Type"] = "application/x-www-from-urlencoded";
    config.headers["token"] = getToken();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  function (response) {
    const data = response.data;
    if (data.code !== 20000) {
      message.info(data.message);
      return Promise.reject(data);
    } else {
      return data;
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default service;
