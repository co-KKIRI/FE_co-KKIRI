import { create } from "zustand";
import { CategoryList } from "@/types/categoryTypes";

interface SelectOptionState {
  type: string;
  recruitEndAt: string;
  progressPeriod: string;
  capacity: number;
  contactWay: string;
  progressWay: string;
  stacks: string[];
  positions: string[];
  title: string;
  content: string;
  setProgressWay?: (progressWay: string) => void;
  setType?: (type: CategoryList) => void;
  setRecruitEndAt?: (recruitEndAt: string) => void;
  setProgressPeriod?: (progressPeriod: string) => void;
  setCapacity?: (capacity: number) => void;
  setContactWay?: (contactWay: string) => void;
  setStacks?: (stacks: string[]) => void;
  setPositions?: (positions: string[]) => void;
  setTitle?: (title: string) => void;
  setContent?: (content: string) => void;
}

const initialSelectOptionState: SelectOptionState = {
  type: "",
  recruitEndAt: "",
  progressPeriod: "",
  capacity: 0,
  contactWay: "",
  progressWay: "",
  stacks: [],
  positions: [],
  title: "",
  content: "",
};
const useSelectOptionStore = create<SelectOptionState>((set) => ({
  ...initialSelectOptionState,
  setType: (type: CategoryList) => set(() => ({ type })),
  setRecruitEndAt: (recruitEndAt: string) => set(() => ({ recruitEndAt })),
  setProgressPeriod: (progressPeriod: string) => set(() => ({ progressPeriod })),
  setCapacity: (capacity: number) => set(() => ({ capacity })),
  setContactWay: (contactWay: string) => set(() => ({ contactWay })),
  setProgressWay: (progressWay: string) => set(() => ({ progressWay })),
  setStacks: (stacks: string[]) => set(() => ({ stacks })),
  setPositions: (positions: string[]) => set(() => ({ positions })),
  setTitle: (title: string) => set(() => ({ title })),
  setContent: (content: string) => set(() => ({ content })),
}));

export default useSelectOptionStore;
