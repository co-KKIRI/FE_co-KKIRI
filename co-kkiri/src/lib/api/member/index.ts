import { memberAddress } from "../address";
import { ApiRequestResponse, apiRequest } from "../axios";
import {
  MemberProfileApiResponseDto,
  SearchedMemberProfileApiRequestDto,
  SearchedMemberProfileApiResponseDto,
} from "./type";

export const getMemberProfile = (memberId: number): Promise<ApiRequestResponse<MemberProfileApiResponseDto>> =>
  apiRequest("get", memberAddress.memberId(memberId));

export const getSearchedMemberProfile = (
  qs: SearchedMemberProfileApiRequestDto,
): Promise<ApiRequestResponse<SearchedMemberProfileApiResponseDto>> =>
  apiRequest("get", memberAddress.search, null, qs);
