// 유저 검색
type SearchedMemberProfile = {
  memberId: number;
  nickname: string;
  profileImageUrl: string;
  position: string;
  career: number;
  stack: string[];
};

export type SearchedMemberProfileApiResponseDto = {
  content: SearchedMemberProfile[];
  // meta: Pageable  페이지네이션 정보, 추후 추가 예정
};

// 유저 프로필 조회
type MemberProfile = {
  memberId: number;
  nickname: string;
  profileImageUrl: string;
  career: number;
  position: string;
  stack: string[];
  gauge: number;
  // tage: Tag // TODO: 추후 작업예정
};

export type MemberProfileApiResponseDto = {
  memberProfile: MemberProfile;
};
