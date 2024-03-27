// 현재 팀원 목록
type PostTeamMember = {
  teamMemberId: number;
  memberId: number;
  nickname: string;
  profileImageUrl: string;
  position: string;
  isLeader: boolean;
};

export type TeamMemberApiResponseDto = {
  data: PostTeamMember[];
};

export type TeamMemberApiRequestDto = {
  order: "ASC" | "DESC"; // 정렬 순서, ASC: 옛날순, DESC: 최신순
  page: number; // 요청할 페이지
  take: number;
};
