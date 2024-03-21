import { SetterFromState } from "@/types/ObjectUtilTypes";
import { UserProfile } from "@/types/UserTypes";
import { create } from "zustand";

interface EditUserProfileState {
  userInfo: UserProfile;
  isVisible: boolean;
}

type EditUserProfileSetter = SetterFromState<EditUserProfileState>;

export const useStore = create<EditUserProfileState & EditUserProfileSetter>((set) => ({
  profileImage: undefined,
  userInfo: {
    // nickname: "낙경",
    // profileImageUrl: "",
    // position: "프론트엔드",
    // career: "1년차",
    // introduce: "안녕하세요 잘 부탁드려요!",
    // stack: ["JavaScript", "TypeScript", "React"],
    // link: "http://dev.co-kkiri.com",
    nickname: "",
    profileImageUrl: "",
    position: "",
    career: undefined,
    introduce: "",
    stack: [],
    link: "",
  },
  isVisible: false,

  setUserInfo: (userInfo) => set({ userInfo }),
  setIsVisible: (isVisible) => set({ isVisible }),
}));
