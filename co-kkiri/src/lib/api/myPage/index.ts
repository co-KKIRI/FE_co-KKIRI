import { myPageAddress } from "../address";
import { ApiRequestResponse, apiRequest } from "../axios";
import {
  InvitedTeamListApiResponseDto,
  MyScrapApiResponseDto,
  UserInfoApiResponseDto,
  UserInfoEditApiRequestDto,
  VisibleProfileStatusApiRequestDto,
} from "./type";

export const getUserInfo = (): Promise<ApiRequestResponse<UserInfoApiResponseDto>> =>
  apiRequest("get", myPageAddress.userInfo);

export const editUserInfo = (data: UserInfoEditApiRequestDto) => apiRequest("patch", myPageAddress.userInfo, data);

export const getInvitedTeamList = (): Promise<ApiRequestResponse<InvitedTeamListApiResponseDto>> =>
  apiRequest("get", myPageAddress.inviteList);

export const getScrapList = (): Promise<ApiRequestResponse<MyScrapApiResponseDto>> =>
  apiRequest("get", myPageAddress.scrapList);

export const editVisibleProfileStatus = (data: VisibleProfileStatusApiRequestDto) =>
  apiRequest("patch", myPageAddress.visibleProfile, data);

export const deleteUser = () => apiRequest("delete", myPageAddress.myPage);
