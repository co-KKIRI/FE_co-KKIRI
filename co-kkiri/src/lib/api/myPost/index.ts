import { myPostAddress } from "../address";
import { apiRequest } from "../axios";
import {
  CompletedListApiResponseDto,
  MyAppliedListApiResponseDto,
  OnGoingListApiResponseDto,
  RecruitedListApiResponseDto,
} from "./type";

/** 내가 신청한 스터디 목록 가져오기 */
export const getApplyList = (): Promise<MyAppliedListApiResponseDto> => apiRequest("get", myPostAddress.applyList);

/** 내가 모집한 스터디 목록 가져오기 */
export const getRecruitList = (): Promise<RecruitedListApiResponseDto> => apiRequest("get", myPostAddress.recruitList);

/** 내가 진행중인 스터디 목록 가져오기 */
export const getOnGoingList = (): Promise<OnGoingListApiResponseDto> => apiRequest("get", myPostAddress.onGoingList);

/** 내가 완료한 스터디 목록 가져오기 */
export const getCompletedList = (): Promise<CompletedListApiResponseDto> =>
  apiRequest("get", myPostAddress.completedList);

/** 진행중인 스터디 완료하기 */
// data 추가해야 함
export const completeOnGoing = () => apiRequest("patch", myPostAddress.onGoingComplete);

/** 피어리뷰 작성하기 */
//data 추가해야 함
export const createReview = () => apiRequest("post", myPostAddress.review);

/** 피어리뷰 목록 가져오기 */
// Promise 추가해야 함
export const getReviewInfo = () => apiRequest("get", myPostAddress.reviewInfo);
