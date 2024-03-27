import { MemberProfileApiResponseDto } from "@/lib/api/member/type";
import { ScoutListApiResponseDto } from "@/lib/api/post/type";

export const scoutList: ScoutListApiResponseDto = {
  data: [
    { postId: 1, title: "으쌰으쌰파티파티" },
    { postId: 3, title: "React 뿌수기 하실분" },
    { postId: 4, title: "프로젝트 파트너 찾아요" },
    { postId: 5, title: "프론트엔드 개발자 모집" },
    { postId: 6, title: "백엔드 개발자 모집" },
    { postId: 7, title: "백엔드 개발자 모집" },
    { postId: 8, title: "디자이너 모집" },
    { postId: 9, title: "기획자 모집" },
    { postId: 10, title: "테스터 모집" },
  ],
};

export const scoutMember: MemberProfileApiResponseDto = {
  memberProfile: {
    nickname: "테스트유저",
    profileImageUrl: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    position: "프론트엔드",
    memberId: 1,
    career: 3,
    stacks: ["React", "TypeScript"],
    gauge: 3,
  },
};
