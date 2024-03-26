import { teamMemberAddress } from "../address";
import { apiRequest } from "../axios";
import { TeamMemberApiRequestDto, TeamMemberApiResponseDto } from "./type";

/** 현재 팀원 목록 가져오기 */
// data 추가해야 함
export const getTeamMember = (postId: number, qs: TeamMemberApiRequestDto): Promise<TeamMemberApiResponseDto> =>
  apiRequest("get", teamMemberAddress.teamMember(postId), null, qs);

/** 신청 수락하기 */
export const acceptMember = (teamMemberId: number) => apiRequest("patch", teamMemberAddress.accept(teamMemberId));

/** 신청 거절하기 */
export const rejectMember = (teamMemberId: number) => apiRequest("patch", teamMemberAddress.reject(teamMemberId));

/** 현재 팀원 삭제하기 */
export const deleteTeamMember = (teamMemberId: number) => apiRequest("delete", teamMemberAddress.out(teamMemberId));
