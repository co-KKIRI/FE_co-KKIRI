import { homeAddress } from "../address";
import { apiRequest } from "../axios";
import { HomeApiResponseDto } from "./type";

/** home 페이지 카드 리스트 가져오기 */
export const getHomeCardList = (): Promise<HomeApiResponseDto> => apiRequest("get", homeAddress);
