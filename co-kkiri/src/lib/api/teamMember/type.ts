// 현재 팀원 목록
type PostTeamMember = {
  teamMemberId: number;
  memberId: number;
  nickname: string;
  profileImageUrl: string;
  position: string;
  isLeader: boolean;
};

type PageMeta = {
  page: number;
  take: number; // 가져올 갯수
  totalCount: number; // 전체 갯수
  pageCount: number; // 페이지 갯수
  hasPreviousPage: boolean; // 이전 페이지가 있는지
  hasNextPage: boolean; // 다음 페이지가 있는지
};

export type TeamMemberApiResponseDto = {
  data: PostTeamMember[];
};

export type TeamMemberApiRequestDto = {
  order: "ASC" | "DESC"; // 정렬 순서, ASC: 옛날순, DESC: 최신순
  page: number; // 요청할 페이지
  take: number;
};
