import { getUserInfoSummary } from "@/lib/api/auth";
import { UserInfoSummaryResponseDto } from "@/lib/api/auth/type";
import { SetterFromState } from "@/types/objectUtilTypes";
import { UserProfile } from "@/types/userTypes";
import { create } from "zustand";

interface UserInfoState {
  userId: number | null;
  userInfo: UserProfile | null;
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
  isVisible: false,

  setUserId: (userId) => set({ userId }),
  setUserInfo: (userInfo) => set({ userInfo }),
  setIsVisible: (isVisible) => set({ isVisible }),
  fetchUserInfo: async () => {
    try {
      const data: UserInfoSummaryResponseDto = await getUserInfoSummary();
      const userProfile: UserProfile = {
        nickname: data.nickname,
        profileImageUrl: data.profileImageUrl,
        position: "",
        career: undefined,
        introduce: "",
        stacks: [],
        link: "",
      };
      set({ userInfo: userProfile });
    } catch (error) {
      console.error("Failed to fetch user info:", error);
    }
  },
}));
