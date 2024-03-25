import { SetterFromState } from "@/types/objectUtilTypes";
import { UserProfile } from "@/types/userTypes";
import { create } from "zustand";

interface UserInfoState {
  userId: number | null;
  userInfo: UserProfile;
  isVisible: boolean;
}

type UserInfoSetter = SetterFromState<UserInfoState>;

export const useUserInfoStore = create<UserInfoState & UserInfoSetter>((set) => ({
  userId: null,
  profileImage: undefined,
  userInfo: {
    nickname: "",
    profileImageUrl: "",
    position: "",
    career: undefined,
    introduce: "",
    stacks: [],
    link: "",
  },
  isVisible: false,

  setUserId: (userId) => set({ userId }),
  setUserInfo: (userInfo) => set({ userInfo }),
  setIsVisible: (isVisible) => set({ isVisible }),
}));
