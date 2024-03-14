import { Outlet } from "react-router-dom";
import useSideBarStore from "@/stores/sideBarStore";
import styled, { keyframes } from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import Gnb from "@/components/commons/Gnb";
import SideBar from "@/components/commons/SideBar";

export default function Navigation() {
  const isSideBarOpen = useSideBarStore((state) => state.isSideBarOpen);
  const toggleSideBar = useSideBarStore((state) => state.toggleSideBar);

  return (
    <>
      <Gnb onSideBarClick={toggleSideBar} />
      <SideBarWrapper $isOpen={isSideBarOpen}>
        <SideBar onClick={toggleSideBar} />
      </SideBarWrapper>
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

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const SideBarWrapper = styled.div<SideBarWrapperProps>`
  position: fixed;

  ${mediaQueries.desktop} {
    animation: ${(props) => (props.$isOpen ? slideIn : slideOut)} 0.2s forwards;
  }

  ${mediaQueries.tablet} {
    position: absolute;
    top: 0;
    display: ${(props) => (props.$isOpen ? "block" : "none")};
  }

  ${mediaQueries.mobile} {
    position: absolute;
    top: 0;
    display: ${(props) => (props.$isOpen ? "block" : "none")};
  }
`;

const OutletWrapper = styled.div<SideBarWrapperProps>`
  ${mediaQueries.desktop} {
    padding-left: ${(props) => (props.$isOpen ? "21rem" : 0)};
  }
`;
