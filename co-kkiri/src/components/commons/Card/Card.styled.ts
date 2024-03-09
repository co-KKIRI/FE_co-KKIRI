import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

type PageProp = {
  $page: string;
};

interface ContainerProps extends PageProp {
  $isSidebarOpen: boolean;
}

const {
  color,
  boxShadow: { content },
  mediaQueries: { desktop },
  mediaQueries: { tablet },
  mediaQueries: { mobile },
} = DESIGN_TOKEN;

export const Container = styled.article<ContainerProps>`
  ${({ $page, $isSidebarOpen }) =>
    $page === "home" && `${desktop} { width: ${$isSidebarOpen && "44.5rem"}; } ${tablet} { width: 34.6rem; }`};
  ${({ $page, $isSidebarOpen }) =>
    $page === "studyList" &&
    `${desktop} { width: ${$isSidebarOpen && "29rem"}; } ${tablet} { width: 34.6rem; } ${mobile}{width: 32rem}`};
  width: 26.5rem;
  border-radius: 2.2rem;
  box-shadow: ${content};
`;

export const TypeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 1.5rem 2rem 0 0;
`;

export const UpperBox = styled.div<PageProp>`
  ${({ $page }) => $page === "home" && `padding: 1rem 2rem 1.8rem;`};
  ${({ $page }) => $page === "studyList" && `padding: 0.5rem 2rem 1.5rem;`};
`;

export const HeaderWrapper = styled.header<PageProp>`
  ${({ $page }) => $page === "home" && `padding-bottom: 0.8rem;`};
  ${({ $page }) => $page === "studyList" && `padding-bottom: 1.2rem;`};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderPadding = styled.div<PageProp>`
  ${({ $page }) => $page === "home" && `padding-top: 1rem; padding-bottom: 0.4rem;`};
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
