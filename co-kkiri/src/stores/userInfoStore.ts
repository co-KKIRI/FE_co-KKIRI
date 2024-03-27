import { getUserInfoSummary } from "@/lib/api/auth";
import { UserInfoSummaryResponseDto } from "@/lib/api/auth/type";
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
      const data: UserInfoSummaryResponseDto = await getUserInfoSummary();
      userProfile = {
        nickname: data.nickname,
        profileImageUrl: data.profileImageUrl,
        position: "",
        career: undefined,
        introduce: "",
        stacks: [],
        link: "",
      };
    } catch (error) {
      console.error("Failed to fetch user info:", error);
    } finally {
      set({ userInfo: userProfile, isLoading: false });
    }
  },
}));
