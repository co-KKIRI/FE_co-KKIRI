import styled, { css } from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import { Pages } from "@/types/pagesTypes";
import Header from "./Header";

interface PageProp {
  $page: Pages;
}

interface ContainerProps extends PageProp {
  $isSidebarOpenNarrow: boolean;
}

const {
  color,
  boxShadow: { content },
  mediaQueries: { tablet, mobile },
} = DESIGN_TOKEN;

const desktopWidthByPage = ($isSidebarOpenNarrow: boolean, $page: Pages) => {
  switch ($page) {
    case "home":
      return $isSidebarOpenNarrow ? "44.5rem" : "26.5rem";
    default:
      return $isSidebarOpenNarrow ? "29rem" : "26.5rem";
  }
};

const mobileWidthByPage = ($page: Pages) => {
  switch ($page) {
    case "home":
      return "26.5rem";
    default:
      return "32rem";
  }
};

const widthForDevice = ({ $isSidebarOpenNarrow, $page }: ContainerProps) => {
  const desktopWidth = desktopWidthByPage($isSidebarOpenNarrow, $page);
  const mobileWidth = mobileWidthByPage($page);

  return css`
    width: ${desktopWidth};

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
        return `padding: 2rem 2rem 1.8rem;`;
      default:
        return `padding: 0.5rem 2rem 1.5rem;`;
    }
  }};
`;

export const HeaderSection = styled(Header)`
  padding-bottom: 1.2rem;
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
  display: grid;
  grid-template-columns: minmax(0, auto) minmax(0, auto);
  align-items: center;
  gap: 1.2rem;
  padding: 1.6rem 2rem;
`;

export const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  justify-self: end;
`;
