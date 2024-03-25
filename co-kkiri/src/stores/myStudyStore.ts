import { create } from "zustand";
import { CategoryStudyStatus } from "@/types/categoryTypes";

interface MyStudyState {
  currentCategory: CategoryStudyStatus;
  setCurrentCategory: (category: CategoryStudyStatus) => void;
}

const useMyStudyStore = create<MyStudyState>()((set) => ({
  currentCategory: "APPLIED",
  setCurrentCategory: (category) => set({ currentCategory: category }),
}));

export default useMyStudyStore;
