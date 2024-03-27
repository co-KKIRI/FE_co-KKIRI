import { getUserInfo } from "@/lib/api/myPage";
import { UserInfoApiResponseDto } from "@/lib/api/myPage/type";
import { SetterFromState } from "@/types/objectUtilTypes";
import { UserProfile } from "@/types/userTypes";
import { create } from "zustand";

interface UserInfoState {
  userId: number | null;
  userInfo: UserProfile | null;
  isLoading: boolean;
  isVisible: boolean;
}

type UserInfoSetter = SetterFromState<UserInfoState>;

type UserInfoActions = {
  fetchUserInfo: () => Promise<void>;
};

type UserInfoStore = UserInfoState & UserInfoSetter & UserInfoActions;

export const useUserInfoStore = create<UserInfoStore>((set) => ({
  userId: null,
  profileImage: undefined,
  userInfo: null,
  isLoading: true,
  isVisible: false,

  setUserId: (userId) => set({ userId }),
  setUserInfo: (userInfo) => set({ userInfo }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setIsVisible: (isVisible) => set({ isVisible }),
  fetchUserInfo: async () => {
    let userProfile: UserProfile | null = null;
    try {
      const data: UserInfoApiResponseDto = await getUserInfo();
      const { nickname, profileImageUrl, position, career, introduce, link } = data;
      userProfile = {
        nickname,
        profileImageUrl,
        position,
        career,
        introduce,
        stacks: data.stack,
        link,
      };
    } catch (error) {
      console.error("Failed to fetch user info:", error);
    } finally {
      set({ userInfo: userProfile, isLoading: false });
    }
  },
}));
