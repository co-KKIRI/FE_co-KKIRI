import { myPageAddress } from "../address";
import { apiRequest } from "../axios";
import {
  InvitedTeamListApiRequestDto,
  InvitedTeamListApiResponseDto,
  MyScrapApiRequestDto,
  MyScrapApiResponseDto,
  UserInfoApiResponseDto,
  UserInfoEditApiRequestDto,
  VisibleProfileStatusApiRequestDto,
} from "./type";

/** 마이페이지 유저 정보 가져오기 */
export const getUserInfo = (): Promise<UserInfoApiResponseDto> => apiRequest("get", myPageAddress.userInfo);

/** 마이페이지 유저 정보 수정하기 */
export const editUserInfo = (data: UserInfoEditApiRequestDto) => apiRequest("patch", myPageAddress.userInfo, data);

/** 초대된 팀 목록 가져오기 */
export const getInvitedTeamList = (qs: InvitedTeamListApiRequestDto): Promise<InvitedTeamListApiResponseDto> =>
  apiRequest("get", myPageAddress.inviteList, null, qs);

/** 스크랩 목록 가져오기 */
export const getScrapList = (qs: MyScrapApiRequestDto): Promise<MyScrapApiResponseDto> =>
  apiRequest("get", myPageAddress.scrapList, null, qs);

/** 프로필 공개 여부 가져오기 */
export const getVisibleProfileStatus = (): Promise<VisibleProfileStatusApiRequestDto> =>
  apiRequest("get", myPageAddress.visibleProfile);

/** 프로필 공개 여부 수정하기 */
export const editVisibleProfileStatus = (data: VisibleProfileStatusApiRequestDto) =>
  apiRequest("patch", myPageAddress.visibleProfile, data);

/** 회원 탈퇴하기 */
export const deleteUser = () => apiRequest("delete", myPageAddress.myPage);
