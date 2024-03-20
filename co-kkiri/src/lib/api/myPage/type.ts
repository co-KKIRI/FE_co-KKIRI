// 마이 페이지 유저 정보
export type UserInfoApiResponseDto = {
  nickname: string;
  profileImageUrl: string;
  position: string;
  career: number;
  introduce: string;
  stack: string[];
  link: string;
  isVisibleProfile: boolean;
};

//마이 페이지 팀 초대된 목록
type TeamInvite = {
  teamInviteId: number;
  postTitle: string;
};

export type TeamInviteApiResponseDto = {
  inviteList: TeamInvite[];
};

// 마이 페이지 스크랩 목록
type MyScrap = {
  postId: number;
  postTitle: string;
};

export type MyScrapApiResponseDto = {
  scrapList: MyScrap[];
};

// 마이 페이지 유저 정보 수정
export type UserInfoEditApiRequestDto = {
  nickname: string;
  profileImageUrl: string;
  position: string;
  career: number;
  introduce: string;
  stack: string[];
  link: string;
};

// 마이 페이지 프로필 공개 여부 수정
export type VisibleProfileStatusApiRequestDto = {
  isVisibleProfile: boolean;
};
