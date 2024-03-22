import { InvitedTeamListApiResponseDto } from "@/lib/api/myPage/type";

interface InvitedTeamList {
  result: InvitedTeamListApiResponseDto;
}

export const invitedTeamList: InvitedTeamList = {
  result: {
    inviteList: [
      { teamInviteId: 1, postTitle: "실제 사용할 쇼핑몰 웹프로젝트 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" },
      { teamInviteId: 2, postTitle: "실제 사용할 쇼핑몰 웹프로젝트" },
      { teamInviteId: 3, postTitle: "실제 사용할 쇼핑몰 웹프로젝트" },
      { teamInviteId: 4, postTitle: "실제 사용할 쇼핑몰 웹프로젝트" },
    ],
  },
};
