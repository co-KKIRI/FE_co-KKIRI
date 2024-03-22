import { SetterFromState } from "@/types/objectUtilTypes";
import { UserProfile } from "@/types/userTypes";
import { create } from "zustand";

interface EditUserProfileState {
  userInfo: UserProfile;
  isVisible: boolean;
}

type EditUserProfileSetter = SetterFromState<EditUserProfileState>;

export const useUserInfoStore = create<EditUserProfileState & EditUserProfileSetter>((set) => ({
  profileImage: undefined,
  userInfo: {
    nickname: "",
    profileImageUrl: "",
    position: "",
    career: null,
    introduce: "",
    stack: [],
    link: "",
  },
  isVisible: false,

  setUserInfo: (userInfo) => set({ userInfo }),
  setIsVisible: (isVisible) => set({ isVisible }),
}));
