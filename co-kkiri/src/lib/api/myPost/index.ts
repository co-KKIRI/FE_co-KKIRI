import { myPostAddress } from "../address";
import { ApiRequestResponse, apiRequest } from "../axios";
import {
  CompletedListApiResponseDto,
  MyAppliedListApiResponseDto,
  OnGoingListApiResponseDto,
  RecruitedListApiResponseDto,
} from "./type";

export const getApplyList = (): Promise<ApiRequestResponse<MyAppliedListApiResponseDto>> =>
  apiRequest("get", myPostAddress.applyList);

export const getRecruitList = (): Promise<ApiRequestResponse<RecruitedListApiResponseDto>> =>
  apiRequest("get", myPostAddress.recruitList);

export const getOnGoingList = (): Promise<ApiRequestResponse<OnGoingListApiResponseDto>> =>
  apiRequest("get", myPostAddress.onGoingList);

export const getCompletedList = (): Promise<ApiRequestResponse<CompletedListApiResponseDto>> =>
  apiRequest("get", myPostAddress.completedList);

// data 추가해야 함
export const completeOnGoing = () => apiRequest("patch", myPostAddress.onGoingComplete);

//data 추가해야 함
export const createReview = () => apiRequest("post", myPostAddress.review);

// Promise 추가해야 함
export const getReviewInfo = () => apiRequest("get", myPostAddress.reviewInfo);
