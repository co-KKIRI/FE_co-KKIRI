import { create } from "zustand";

interface SideBarState {
  isSideBarOpen: boolean;
  toggleSideBar: () => void;
}

const useSideBarStore = create<SideBarState>()((set) => ({
  isSideBarOpen: false,
  toggleSideBar: () => set((state) => ({ isSideBarOpen: !state.isSideBarOpen })),
}));

export default useSideBarStore;
