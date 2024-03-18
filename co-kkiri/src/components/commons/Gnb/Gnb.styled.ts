import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

const { color, typography, mediaQueries } = DESIGN_TOKEN;

export const Container = styled.div`
  background-color: ${color.white};
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;

  ${mediaQueries.desktop} {
    padding: 2.8rem 4rem;
  }
  ${mediaQueries.tablet} {
    padding: 2.8rem 3rem;
  }
  ${mediaQueries.mobile} {
    padding: 2.1rem 2rem;
  }
`;

export const LeftGroupBox = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const RightGroupBox = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
`;

export const Logo = styled.img`
  ${mediaQueries.desktop} {
    width: 11.9rem;
    height: 2.4rem;
  }
  ${mediaQueries.tablet} {
    width: 11.9rem;
    height: 2.4rem;
  }
  ${mediaQueries.mobile} {
    width: 9.8rem;
    height: 2rem;
  }
`;

export const PostButton = styled.div`
  ${typography.font14Bold};
  color: ${color.primary[1]};
  ${mediaQueries.mobile} {
    display: none;
  }
`;

export const SignButton = styled.button`
  ${typography.font14Medium};
  &:hover {
    color: ${color.primary[1]};
  }
`;
