import { useWindowSize } from "usehooks-ts";
import useSideBarStore from "@/stores/sideBarStore";

const useResponsiveSidebar = () => {
  const isSideBarOpen = useSideBarStore((state) => state.isSideBarOpen);
  const { width: screenWidth } = useWindowSize();

  const isSidebarOpenNarrow = isSideBarOpen && screenWidth < 1410;

  return isSidebarOpenNarrow;
};

export default useResponsiveSidebar;
