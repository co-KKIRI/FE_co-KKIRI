import { create } from "zustand";

interface AuthModalState {
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (state: boolean) => void;
  toggleAuthModal: () => void;
}

const useAuthModalToggleStore = create<AuthModalState>((set) => ({
  isAuthModalOpen: false,
  setIsAuthModalOpen: (state) => set({ isAuthModalOpen: state }),
  toggleAuthModal: () => set((state) => ({ isAuthModalOpen: !state.isAuthModalOpen })),
}));

export default useAuthModalToggleStore;
