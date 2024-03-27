import { authAddress, memberAddress } from "../address";
import { apiRequest } from "../axios";
import { UserInfoSummaryResponseDto } from "./type";

const { google } = authAddress;

export const googleLogin = (code: string) => apiRequest("post", google.redirect(code));

export const getUserInfoSummary = (): Promise<UserInfoSummaryResponseDto> =>
  apiRequest("get", memberAddress.userInfoSummary);
