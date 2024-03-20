import { homeAddress } from "../address";
import { ApiRequestResponse, apiRequest } from "../axios";
import { HomeApiResponseDto } from "./type";

export const getHomeCardList = (): Promise<ApiRequestResponse<HomeApiResponseDto>> => apiRequest("get", homeAddress);
