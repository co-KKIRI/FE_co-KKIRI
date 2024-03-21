import { teamMemberAddress } from "../address";
import { apiRequest } from "../axios";
import { TeamMemberApiRequestDto } from "./type";

// data 추가해야 함
export const getTeamMember = (postId: number, qs: TeamMemberApiRequestDto) =>
  apiRequest("get", teamMemberAddress.teamMember(postId), null, qs);

export const acceptMember = (teamMemberId: number) => apiRequest("patch", teamMemberAddress.accept(teamMemberId));

export const rejectMember = (teamMemberId: number) => apiRequest("patch", teamMemberAddress.reject(teamMemberId));

export const deleteTeamMember = (teamMemberId: number) => apiRequest("delete", teamMemberAddress.out(teamMemberId));
