import { create } from "zustand";

type CoverImageStore = {
  url?: string;
  isOpen: boolean;
  opOpen: () => void;
  onClose: () => void;
  onReplace: (url: string) => void;
};

const useCoverImage = create<CoverImageStore>((set) => ({
  url: undefined,
  isOpen: false,
  opOpen: () => set({ isOpen: true, url: undefined }),
  onClose: () => set({ isOpen: false, url: undefined }),
  onReplace: (url: string) => set({ isOpen: true, url }),
}));

export default useCoverImage;
