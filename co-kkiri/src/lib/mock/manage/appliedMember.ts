export interface AppliedMember {
  teamMemberId: number;
  memberId: number;
  nickname: string;
  profileImageUrl: string;
  position: string;
}

interface AppliedMemberData {
  result: {
    appliedPostMemberList: AppliedMember[];
  };
}

export const appliedMemberData: AppliedMemberData = {
  result: {
    appliedPostMemberList: [
      { teamMemberId: 8, memberId: 1, nickname: "코끼리", profileImageUrl: "", position: "프론트엔드" },
      { teamMemberId: 7, memberId: 5, nickname: "강아지", profileImageUrl: "", position: "백엔드" },
      { teamMemberId: 6, memberId: 9, nickname: "토끼", profileImageUrl: "", position: "디자이너" },
    ],
  },
};
