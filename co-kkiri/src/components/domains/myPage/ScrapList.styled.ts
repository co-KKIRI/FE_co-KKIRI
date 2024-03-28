import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

const { mediaQueries } = DESIGN_TOKEN;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 91rem;

  ${mediaQueries.tablet} {
    width: 70.8rem;
  }
  ${mediaQueries.mobile} {
    width: 32rem;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
`;

export const Wrapper = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  ${mediaQueries.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.6rem;
  }

  ${mediaQueries.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
