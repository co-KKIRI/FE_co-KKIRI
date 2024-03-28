import { scrapAddress } from "../address";
import { apiRequest } from "../axios";

/** 스크랩 추가하기 */
export const scrapAdd = (postId: number) => apiRequest("post", scrapAddress.scrap(postId));

/** 스크랩 취소하기 */
export const scrapCancel = (postId: number) => apiRequest("delete", scrapAddress.cancel(postId));
