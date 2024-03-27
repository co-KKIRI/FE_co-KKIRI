import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

const { mediaQueries } = DESIGN_TOKEN;

export const Container = styled.div`
  padding-top: 2.6rem;
  padding-bottom: 10rem;
  display: flex;
  justify-content: center;
`;

export const Box = styled.div`
  display: inline-grid;
  gap: 4rem;
  ${mediaQueries.tablet} {
    width: 76.8rem;
  }
  ${mediaQueries.mobile} {
    width: 34rem;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaQueries.tablet} {
    padding: 0 3rem;
    width: 76.8rem;
  }

  ${mediaQueries.mobile} {
    padding: 0 2rem;
    width: 34rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
  }
`;
