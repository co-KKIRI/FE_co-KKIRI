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

export type SearchedMemberProfileApiRequestDto = {
  position?: string; // 포지션
  stack?: string; // 스택
  order: "ASC" | "DESC"; // 정렬 순서, ASC: 옛날순, DESC: 최신순
  page: number; // 요청할 페이지
  take: number; // 몇개 가져올지
};
