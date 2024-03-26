import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

export const BASE_URL = "http://localhost:8080";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export async function apiRequest<T, U>(
  method: HttpMethod,
  url: string,
  data?: U,
  params?: Record<string, unknown>,
  config?: AxiosRequestConfig,
): Promise<T> {
  try {
    const request: AxiosRequestConfig = {
      url,
      method,
      data,
      params,
      ...config,
    };
    const response: AxiosResponse<T> = await axiosInstance(request);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw error;
    } else {
      console.error(`${method} Error : `, error);
      throw error;
    }
  }
}
