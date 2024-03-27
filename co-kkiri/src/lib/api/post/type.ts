import { CategoryListFilter } from "@/constants/categories";
import { CategoryList } from "@/types/categoryTypes";
import { PageMeta, PaginationOptions } from "../pageMetaType";

/**스터디모집하기, 수정하기 (연락 링크 추가 예정)*/
export type RecruitApiRequestDto = {
  type: CategoryList;
  recruitEndAt: string;
  progressPeriod: string;
  capacity: number;
  contactWay: string;
  progressWay: string;
  stacks: string[];
  positions: string[];
  title: string;
  content: string;
  link?: string;
};

export type PostInfo = {
  postId: number;
  type: CategoryList;
  status?: "READY" | "PROGRESS" | "PROGRESS_END" | "DONE";
  recruitEndAt: string;
  isScraped: boolean;
  progressWay: string;
  title: string;
  positions: string[];
  stacks: string[];
  memberNickname: string;
  memberProfileImg: string;
  viewCount: number;
  commentCount: number;
};

/**스터디 목록*/
export type ListApiResponseDto = {
  data: PostInfo[];
  meta: PageMeta;
};

export type ListApiRequestDto = PaginationOptions & {
  meetingType: CategoryListFilter;
  positions?: string[];
  progressWay?: string;
  stacks?: string[];
  sortBy?: "LATEST" | "BY_DEADLINE" | "BY_VIEW";
};

export type PostApplyStatus = "OWNER" | "INVITED" | "NOT_APPLIED" | "APPLIED" | "RECRUIT_CLOSED";

export type PostDetails = {
  postTitle: string; //제목
  postContent: string; //내용
  userProfileImg: string; //작성자 프로필이미지
  userNickname: string; //작성자 닉네임
  createdAt: string; //생성 시간 YYYY-MM-DD HH:MM:SS
  viewCount: number; //조회수
  scrapCount: number; //스크랩수
  type: "STUDY" | "PROJECT"; //스터디 종류
  recruitEndAt: string; // 모집 마감
  progressPeriod: string; //진행 기간
  progressWay: string; //진행 방법 (온라인/오프라인)
  contactWay: string; //연락 방법
  capacity: number; //모집 인원 ==> 테이블에 추가 예정
  positions: string[]; //포지션
  stacks: string[]; //스택
  commentCount: number; //댓글 수
  link: string; //연락 방법 링크
};
/**스터디 상세*/
export type PostDetailApiResponseDto = {
  postDetails: PostDetails;
  isScraped: boolean; //스크랩 되어있는지 아닌지
  postApplyStatus: PostApplyStatus;
};

/**스터디 지원 */
export type ApplyPostApiRequestDto = {
  memberId: number;
};

/**스터디 지원 목록 */
export type AppliedMemberListApiRequestDto = PaginationOptions;

type AppliedMember = {
  teamMemberId: number;
  memberId: number;
  nickname: string;
  profileImageUrl: string;
  position: string;
};

export type AppliedMemberListApiResponseDto = {
  data: AppliedMember[];
};

/**스터디 프로젝트 정보 */
export type StudyManagementApiResponseDto = {
  postId: number;
  postTitle: string; //제목
  type: CategoryList; //스터디 종류
  recruitEndAt: string;
  progressPeriod: string;
  progressWay: string; //진행 방법 (온라인/오프라인)
  status: "READY" | "PROGRESS" | "PROGRESS_END" | "DONE"; // 스터디 진행 상태
  contactWay: string; //연락 방법
  capacity: number; //모집 인원 ==> 테이블에 추가 예정
  positions: string[]; //포지션
  isLeader: boolean; // 방장인지 아닌지
  stacks: string[];
};

type ScoutPost = {
  postId: number;
  title: string;
};

/**스카우트 스터디/프로젝트 목록 -백엔드 확인요망*/
export type ScoutListApiResponseDto = {
  content: ScoutPost[];
  // meta: Pageable  페이지네이션 정보, 추후 추가 예정
};

/**스카우트하기 */
export type InviteMemberRequestDto = {
  postId: number;
  memberId: number;
  message: string;
};

/**이미지 업로드하기 */
export type ImageUploadApiResponseDto = {
  uploadUrl: string;
};
