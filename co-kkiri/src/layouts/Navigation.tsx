import Gnb from "@/components/commons/Gnb";
import SideBar from "@/components/commons/SideBar";
import DESIGN_TOKEN from "@/styles/tokens";
import { useState } from "react";
import styled from "styled-components";

export default function Navigation() {
  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);

  const handleSideBarOpen = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  return (
    <>
      <Gnb onSideBarClick={handleSideBarOpen} />
      <SideBarWrapper $isOpen={isCategoryOpen}>
        <SideBar onClick={handleSideBarOpen} />
      </SideBarWrapper>
    </>
  );
}

const { mediaQueries } = DESIGN_TOKEN;

interface SideBarWrapperProps {
  $isOpen: boolean;
}

const SideBarWrapper = styled.div<SideBarWrapperProps>`
  ${mediaQueries.desktop} {
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.$isOpen ? "translateX(0)" : "translateX(-100%)")};
  }
  ${mediaQueries.tablet} {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    display: ${(props) => (props.$isOpen ? "block" : "none")};
  }

  ${mediaQueries.mobile} {
    position: absolute;
    top: 0;
    left: 0;
    display: ${(props) => (props.$isOpen ? "block" : "none")};
  }
`;
