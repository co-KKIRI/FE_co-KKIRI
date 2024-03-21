import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

export interface ApiRequestResponse<T> {
  data?: T | null;
  errorMessage: string | null;
}

export const BASE_URL = "";

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
): Promise<ApiRequestResponse<T>> {
  try {
    const request: AxiosRequestConfig = {
      url,
      method,
      data,
      params,
      ...config,
    };
    const response: AxiosResponse<T> = await axiosInstance(request);
    return { data: response.data, errorMessage: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message;
      return { data: null, errorMessage };
    } else {
      console.error(`${method} Error : `, error);
      throw error;
    }
  }
}
