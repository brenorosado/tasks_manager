import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://localhost:8080";

const api = axios.create({
  baseURL: BASE_URL
});

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const bearerToken = localStorage.getItem("@my_tasks_token");
  if(bearerToken && config.headers) {
    config.headers.Authorization = `Bearer ${bearerToken}`;
  } 

  return config;
});

export default api;