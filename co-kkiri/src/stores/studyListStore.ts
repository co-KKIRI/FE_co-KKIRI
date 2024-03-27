import { create } from "zustand";
import { CategoryListFilter } from "@/constants/categories";

interface StudyState {
  currentCategory: CategoryListFilter;
  setCurrentCategory: (category: CategoryListFilter) => void;
}

const useStudyListStore = create<StudyState>()((set) => ({
  currentCategory: "ALL",
  setCurrentCategory: (category) => set({ currentCategory: category }),
}));

export default useStudyListStore;
