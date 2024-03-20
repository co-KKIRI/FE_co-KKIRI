import axios from "axios";

export type HttpMethod = "get" | "post" | "put" | "delete";

export const BASE_URL = "";

export const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
