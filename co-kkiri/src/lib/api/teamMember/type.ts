// 현재 팀원 목록
type PostTeamMember = {
  teamMemberId: number;
  memberId: number;
  nickname: string;
  profileImageUrl: string;
  isLeader: boolean;
};

export type TeamMemberApiResponseDto = {
  postTeamMemberList: PostTeamMember[];
};
