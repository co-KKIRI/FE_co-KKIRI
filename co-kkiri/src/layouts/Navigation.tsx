import { Outlet } from "react-router-dom";
import useSideBarStore from "@/stores/sideBarStore";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import Gnb from "@/components/commons/Gnb";
import SideBar from "@/components/commons/SideBar";
import { useWindowSize } from "usehooks-ts";
import { slideIn, slideOut } from "@/utils/animation";

export default function Navigation() {
  const isSideBarOpen = useSideBarStore((state) => state.isSideBarOpen);
  const toggleSideBar = useSideBarStore((state) => state.toggleSideBar);

  const { width: screenWidth } = useWindowSize();
  const isTabletOrMobile = screenWidth < 1200;

  const handleSideBar = () => {
    toggleSideBar();
  };

  return (
    <>
      <Gnb onSideBarClick={handleSideBar} />
      <SideBarWrapper $isOpen={isSideBarOpen}>
        {isSideBarOpen && isTabletOrMobile && <SideBar onClick={handleSideBar} onClose={handleSideBar} />}
        {!isTabletOrMobile && <SideBar onClose={() => {}} />}
      </SideBarWrapper>
      <OutletWrapper $isOpen={isSideBarOpen}>
        <Outlet />
      </OutletWrapper>
    </>
  );
}

const { mediaQueries, zIndex } = DESIGN_TOKEN;

interface SideBarWrapperProps {
  $isOpen: boolean;
}

const SideBarWrapper = styled.div<SideBarWrapperProps>`
  ${zIndex.modal}
  position: fixed;
  animation: ${(props) => (props.$isOpen ? slideIn : slideOut)} 0.2s forwards;
`;

const OutletWrapper = styled.div<SideBarWrapperProps>`
  padding-left: ${(props) => (props.$isOpen ? "21rem" : 0)};

  ${mediaQueries.tablet} {
    padding-left: 0;
  }
`;
