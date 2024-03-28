import { PaginationOptions } from "../pageMetaType";

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

export type TeamMemberApiRequestDto = PaginationOptions;
