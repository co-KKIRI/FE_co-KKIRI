import axios from "axios";

export type HttpMethod = "get" | "post" | "put" | "delete";

const BASE_URL = "";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
