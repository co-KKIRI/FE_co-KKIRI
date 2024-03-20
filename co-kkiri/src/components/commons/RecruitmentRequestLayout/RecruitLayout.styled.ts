import DESIGN_TOKEN from "@/styles/tokens";
import { useState } from "react";
import styled from "styled-components";

const { typography, color, mediaQueries } = DESIGN_TOKEN;

export const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8rem 0 12rem;

  & h1 {
    ${typography.font24Bold}
  }

  & h3 {
    ${typography.font16Bold}
  }

  & h5 {
    ${typography.font16Medium}
    ${color.black[2]}
  }
`;

export const GirdContainer = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-areas:
    "a b"
    "c d"
    "e f";

  ${mediaQueries.tablet} {
    grid-template-areas:
      "a"
      "b"
      "c"
      "d"
      "e"
      "f";
  }

  ${mediaQueries.mobile} {
    grid-template-areas:
      "a"
      "b"
      "c"
      "d"
      "e"
      "f";
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 77.4rem;
  gap: 4rem;

  & h1 {
    border-bottom: 0.1rem solid ${color.gray[2]};
    padding-bottom: 2rem;
  }

  ${mediaQueries.tablet} {
    width: 46.2rem;
  }

  ${mediaQueries.mobile} {
    width: 32rem;
  }
`;

export const RadioButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.9rem;

  & span {
    display: flex;
    gap: 3rem;
  }
`;

export const RadioButtonWarper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const SelectChipBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }
`;

export const QuillBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;

  & h1 {
    border-bottom: none;
  }
`;

export const SubmitButtonBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 15.6rem);
  gap: 1.2rem;
  justify-content: end;
`;
