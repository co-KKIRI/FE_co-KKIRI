import styled, { css } from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

type PageType = "home" | "studyList";

interface PageProp {
  $page: PageType;
}

interface ContainerProps extends PageProp {
  $isSidebarOpenNarrow: boolean;
}

const {
  color,
  boxShadow: { content },
  mediaQueries: { desktop, tablet, mobile },
} = DESIGN_TOKEN;

const desktopWidthByPage = ($isSidebarOpenNarrow: boolean, $page: PageType) => {
  switch ($page) {
    case "home":
      return $isSidebarOpenNarrow ? "44.5rem" : "26.5rem";
    case "studyList":
      return $isSidebarOpenNarrow ? "34.6rem" : "26.5rem";
    default:
      return "26.5rem";
  }
};

const mobileWidthByPage = ($page: PageType) => {
  switch ($page) {
    case "home":
      return "26.5rem";
    case "studyList":
      return "32rem";
    default:
      return "26.5rem";
  }
};

const widthForDevice = ({ $isSidebarOpenNarrow, $page }: ContainerProps) => {
  const desktopWidth = desktopWidthByPage($isSidebarOpenNarrow, $page);
  const mobileWidth = mobileWidthByPage($page);

  return css`
    ${desktop} {
      width: ${desktopWidth};
    }
    ${tablet} {
      width: 34.6rem;
    }
    ${mobile} {
      width: ${mobileWidth};
    }
  `;
};

export const Container = styled.article<ContainerProps>`
  ${widthForDevice}
  background-color: ${color.white};
  border-radius: 2rem;
  box-shadow: ${content};
`;

export const TypeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 1.5rem 2rem 0 0;
`;

export const ProjectChip = styled.div`
  margin-left: -0.2rem;
`;

export const UpperBox = styled.div<PageProp>`
  ${({ $page }) => {
    switch ($page) {
      case "home":
        return `padding: 1rem 2rem 1.8rem;`;
      case "studyList":
        return `padding: 0.5rem 2rem 1.5rem;`;
      default:
        return "";
    }
  }};
`;

const paddingBottomByPage = ($page: PageType) => {
  switch ($page) {
    case "home":
      return "0.8rem";
    case "studyList":
      return "1.2rem";
    default:
      return "0.8rem";
  }
};

export const HeaderWrapper = styled.header<PageProp>`
  ${({ $page }) => `padding-bottom: ${paddingBottomByPage($page)};`}
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderPadding = styled.div<PageProp>`
  ${({ $page }) => ($page === "home" ? `padding-top: 1rem; padding-bottom: 0.4rem;` : "")};
`;

export const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const BreakLine = styled.div`
  background-color: ${color.gray[3]};
  height: 0.1rem;
  width: 100%;
`;

export const FooterBox = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 2rem;
`;

export const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;
