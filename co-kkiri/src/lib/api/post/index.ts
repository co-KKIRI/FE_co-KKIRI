import { imageAddress, postAddress } from "../address";
import { apiRequest } from "../axios";
import {
  AppliedMemberListApiRequestDto,
  AppliedMemberListApiResponseDto,
  ApplyPostApiRequestDto,
  InviteMemberRequestDto,
  ListApiRequestDto,
  ListApiResponseDto,
  PostDetailApiResponseDto,
  RecruitApiRequestDto,
  ScoutListApiResponseDto,
  StudyManagementApiResponseDto,
} from "./type";

/**
 * studyList 페이지용 스터디 리스트 가져오기
 *
 *@param {ListApiRequestDto}  qs  쿼리스트링을 객체로 받습니다.
 */
export const getPostList = (qs: ListApiRequestDto): Promise<ListApiResponseDto> =>
  apiRequest("get", postAddress.list, null, qs);

/** 스터디 상세 보기*/
export const getPostDetail = (postId: number): Promise<PostDetailApiResponseDto> =>
  apiRequest("get", postAddress.postId(postId));

/** 스터디 글 작성하기 */
export const createPost = (data: RecruitApiRequestDto): Promise<{ postId: number }> =>
  apiRequest<{ postId: number }, RecruitApiRequestDto>("post", postAddress.recruit, data);

/** 스터디 글 수정하기 */
export const modifyPost = (postId: number, data: RecruitApiRequestDto) =>
  apiRequest<{ result: { status: 200 } }, RecruitApiRequestDto>("patch", postAddress.modify(postId), data);

/** 스터디 글 삭제하기 */
export const deletePost = (postId: number) => apiRequest("delete", postAddress.postId(postId));

/** 스터디 지원하기 */
export const applyPost = (postId: number, data: ApplyPostApiRequestDto) =>
  apiRequest("post", postAddress.apply(postId), data);

/** 지원한 유저 목록 가져오기
 *
 *@param {number} postId
 *@param {AppliedMemberListApiRequestDto}  qs  쿼리스트링을 객체로 받습니다.
 */
export const getAppliedMemberList = (
  postId: number,
  qs: AppliedMemberListApiRequestDto,
): Promise<AppliedMemberListApiResponseDto> => apiRequest("get", postAddress.apply(postId), null, qs);

/** 스터디 초대를 위한 내가 만든 스터디 리스트 */
export const getPostListForInvite = (): Promise<ScoutListApiResponseDto> => apiRequest("get", postAddress.scout);

/** 스터디 초대하기 */
export const inviteMember = (data: InviteMemberRequestDto) => apiRequest("post", postAddress.invite, data);

/** 스터디 프로젝트 정보  */
export const getStudyManagement = (postId: number): Promise<StudyManagementApiResponseDto> =>
  apiRequest("get", postAddress.management(postId));

//아래 함수들은 api 문서 수정되면 한번에 반영해놓겠습니다.

/** 스터디 모집 시작하기*/
export const recruitStart = (postId: number) => apiRequest("patch", postAddress.recruitStart(postId));

/** 스터디 모집 마감하기 */
export const recruitEnd = (postId: number) => apiRequest("patch", postAddress.recruitEnd(postId));

/** 스터디 모집 완료하기 */
export const recruitComplete = (postId: number) => apiRequest("patch", postAddress.recruitComplete(postId));

/** 이미지 url 가져오기 */
export const getImageUploadUrl = () => apiRequest("post", imageAddress);
