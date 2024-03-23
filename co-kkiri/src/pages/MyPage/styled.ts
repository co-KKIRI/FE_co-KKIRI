import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

const { mediaQueries } = DESIGN_TOKEN;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 6rem 0;

  ${mediaQueries.mobile} {
    padding: 2rem 0;
  }
`;

export const Box = styled.div`
  display: grid;
  gap: 6rem;
  grid-template:
    "wrapper"
    "scrap";

  ${mediaQueries.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12rem;
  }

  ${mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 6rem;
  grid-area: wrapper;

  ${mediaQueries.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12rem;
  }

  ${mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12rem;
  }
`;

export const Lists = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12rem;
`;
