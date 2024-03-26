import { CategoryList } from "@/types/categoryTypes";

// 마이 페이지 유저 정보
export type UserInfoApiResponseDto = {
  nickname: string;
  profileImageUrl: string;
  position: string;
  career: number;
  introduce: string;
  stack: string[];
  link: string;
};

//마이 페이지 초대된 팀 목록
type InvitedTeam = {
  teamInviteId: number;
  postTitle: string;
};

type PageMeta = {
  page: number;
  take: number; // 가져올 갯수
  totalCount: number; // 전체 갯수
  pageCount: number; // 페이지 갯수
  hasPreviousPage: boolean; // 이전 페이지가 있는지
  hasNextPage: boolean; // 다음 페이지가 있는지
};

export type InvitedTeamListApiResponseDto = {
  data: InvitedTeam[];
  meta: PageMeta;
};

export type InvitedTeamListApiRequestDto = {
  order: "ASC" | "DESC"; // 정렬 순서, ASC: 옛날순, DESC: 최신순
  page: number; // 요청할 페이지
  take: number;
};

// 마이 페이지 스크랩 목록
export type MyScrap = {
  postId: number;
  type: CategoryList;
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

export type MyScrapApiResponseDto = {
  data: MyScrap[];
  meta: PageMeta;
};

export type MyScrapApiRequestDto = {
  order: "ASC" | "DESC"; // 정렬 순서, ASC: 옛날순, DESC: 최신순
  page: number; // 요청할 페이지
  take: number;
};

// 마이 페이지 유저 정보 수정
export type UserInfoEditApiRequestDto = {
  nickname: string;
  profileImageUrl: string;
  position: string;
  career: number;
  introduce: string;
  stacks: string[];
  link: string;
};

// 마이 페이지 프로필 공개 여부 수정
export type VisibleProfileStatusApiRequestDto = {
  isVisibleProfile: boolean;
};
