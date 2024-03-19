export interface PostTeamMember {
  teamMemberId: number;
  memberId: number;
  nickname: string;
  profileImageUrl: string;
  isLeader: boolean;
  position: string;
}

interface PostTeamMemberData {
  result: {
    postTeamMemberList: PostTeamMember[];
  };
}

export const postTeamMemberData: PostTeamMemberData = {
  result: {
    postTeamMemberList: [
      {
        teamMemberId: 1,
        memberId: 23,
        nickname: "호랑이",
        profileImageUrl: "",
        isLeader: true,
        position: "프론트엔드",
      },
      { teamMemberId: 2, memberId: 6, nickname: "푸바오", profileImageUrl: "", isLeader: false, position: "백엔드" },
      { teamMemberId: 3, memberId: 12, nickname: "사자", profileImageUrl: "", isLeader: false, position: "디자이너" },
      { teamMemberId: 4, memberId: 7, nickname: "아기표범", profileImageUrl: "", isLeader: false, position: "백엔드" },
      {
        teamMemberId: 5,
        memberId: 8,
        nickname: "아델리펭귄",
        profileImageUrl: "",
        isLeader: false,
        position: "프론트엔드",
      },
    ],
  },
};
