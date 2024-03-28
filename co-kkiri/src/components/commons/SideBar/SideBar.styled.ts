import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

const { boxShadow, color, typography, mediaQueries } = DESIGN_TOKEN;

export const Background = styled.div`
  position: sticky;
  top: 8rem;
  left: 0;
`;

export const Container = styled.div`
  width: 21rem;
  height: 80vh;
  box-shadow: ${boxShadow.content};
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  padding: 3rem 4rem 4rem;
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${mediaQueries.tablet} {
    padding: 0 3rem 4rem;
    border-radius: 0;
    box-shadow: none;
    width: 21rem;
    height: 100vh;
  }

  ${mediaQueries.mobile} {
    padding: 0 2rem 4rem;
    width: 21rem;
    height: 100vh;
    box-shadow: none;
    border-radius: 0;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  ${mediaQueries.tablet} {
    gap: 6.8rem;
  }
  ${mediaQueries.mobile} {
    gap: 6.1rem;
  }
`;

export const CategoryBox = styled.div`
  ${typography.font14Semibold}
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  color: ${color.black[1]};
`;

export const Category = styled.button`
  background-color: ${color.white};

  &:hover {
    color: ${color.primary[1]};
  }
`;

export const HamburgerMenuWrapper = styled.button`
  display: none;

  ${mediaQueries.tablet} {
    display: block;
    padding-top: 2.8rem;
    width: 2rem;
  }

  ${mediaQueries.mobile} {
    display: block;
    padding-top: 2.1rem;
    width: 1.8rem;
  }
`;
