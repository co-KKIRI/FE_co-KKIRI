import { UserInfoApiResponseDto } from "@/lib/api/myPage/type";

interface UserProfileInfoData {
  result: {
    userProfileInfo: UserInfoApiResponseDto;
  };
}

export const userProfileInfoData: UserProfileInfoData = {
  result: {
    userProfileInfo: {
      nickname: "코끼리",
      profileImageUrl: "",
      position: "프론트엔드",
      career: 1,
      introduce: "안녕하세요. 주니어 개발자 코끼리입니다.",
      stack: ["React", "Next.js"],
      link: "https://www.youtube.com",
      isVisibleProfile: true,
    },
  },
};
