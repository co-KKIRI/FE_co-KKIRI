import Gnb from "@/components/commons/Gnb";
import SideBar from "@/components/commons/SideBar";
import DESIGN_TOKEN from "@/styles/tokens";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export default function Navigation() {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  const handleSideBarOpen = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <>
      <Gnb onSideBarClick={handleSideBarOpen} />
      <SideBarWrapper $isOpen={isSideBarOpen}>
        <SideBar onClick={handleSideBarOpen} />
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
    padding-left: ${(props) => (props.$isOpen ? "23rem" : 0)};
  }
`;
