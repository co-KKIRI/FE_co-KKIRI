import { useState } from "react";
import { Outlet } from "react-router-dom";
import useSideBarStore from "@/stores/sideBarStore";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import Gnb from "@/components/commons/Gnb";
import SideBar from "@/components/commons/SideBar";
import { useWindowSize } from "usehooks-ts";
import { slideIn, slideOut } from "@/utils/animation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const isSideBarOpen = useSideBarStore((state) => state.isSideBarOpen);
  const toggleSideBar = useSideBarStore((state) => state.toggleSideBar);

  const { width: screenWidth } = useWindowSize();
  const isTabletOrMobile = screenWidth < 1200;

  const handleSideBarOpen = () => {
    toggleSideBar();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Gnb onSideBarClick={handleSideBarOpen} />
      {isSideBarOpen && (
        <SideBarWrapper $isOpen={isSideBarOpen}>
          {!isTabletOrMobile ? (
            <SideBar onClose={() => {}} />
          ) : (
            isOpen && <SideBar onClick={handleSideBarOpen} onClose={handleSideBarOpen} />
          )}
        </SideBarWrapper>
      )}
      <OutletWrapper $isOpen={isSideBarOpen}>
        <Outlet />
      </OutletWrapper>
    </>
  );
}

const { mediaQueries } = DESIGN_TOKEN;

interface SideBarWrapperProps {
  $isOpen: boolean;
}

const SideBarWrapper = styled.div<SideBarWrapperProps>`
  position: fixed;
  animation: ${(props) => (props.$isOpen ? slideIn : slideOut)} 0.2s forwards;
`;

const OutletWrapper = styled.div<SideBarWrapperProps>`
  ${mediaQueries.desktop} {
    padding-left: ${(props) => (props.$isOpen ? "21rem" : 0)};
  }
`;
