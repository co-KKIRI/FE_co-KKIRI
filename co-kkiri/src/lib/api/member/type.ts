// 유저 프로필 조회
type MemberProfile = {
  memberId: number;
  nickname: string;
  profileImageUrl: string;
  career: number;
  position: string;
  stacks: string[];
  gauge: number;
  // tage: Tag // TODO: 추후 작업예정
};

export type MemberProfileApiResponseDto = {
  memberProfile: MemberProfile;
};

// 유저 검색
export type SearchedMemberProfile = {
  memberId: number;
  nickname: string;
  profileImageUrl: string;
  position: string;
  career: number;
  stacks: string[];
  score: number;
};

type PageMeta = {
  page: number;
  take: number; // 가져올 갯수
  totalCount: number; // 전체 갯수
  pageCount: number; // 페이지 갯수
  hasPreviousPage: boolean; // 이전 페이지가 있는지
  hasNextPage: boolean; // 다음 페이지가 있는지
};

export type SearchedMemberProfileApiResponseDto = {
  content: SearchedMemberProfile[];
  meta: PageMeta;
};

export type SearchedMemberProfileApiRequestDto = {
  position?: string; // 포지션
  stacks?: string[]; // 스택
  order?: "ASC" | "DESC"; // 정렬 순서, ASC: 옛날순, DESC: 최신순
  page?: number; // 요청할 페이지
  take?: number; // 몇개 가져올지
};
