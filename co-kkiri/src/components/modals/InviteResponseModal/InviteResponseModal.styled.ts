import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

const { color, mediaQueries, typography } = DESIGN_TOKEN;

export const Container = styled.div`
  width: 100%;

  & h1 {
    ${typography.font20Bold};
    text-align: center;
  }

  & h6 {
    ${typography.font14Bold};
    color: ${color.gray[1]};
    margin-bottom: 0.8rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 4rem;
  width: 100%;
  padding: 3rem;
  margin-top: 0.2rem;

  ${mediaQueries.mobile} {
    padding: 2rem;
  }
`;

export const SenderInfoBox = styled.div``;

export const ContentBox = styled.div`
  & h6 {
    display: flex;
    gap: 0.4rem;
  }
  & p {
    ${typography.font16Bold}
    color: ${color.black[2]};
  }
`;

export const MessageBox = styled.div`
  & p {
    ${typography.font16Medium}
    color: ${color.black[2]};
  }
`;

export const SubmitButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.2rem;

  ${mediaQueries.tablet} {
    gap: 0.8rem;
  }

  ${mediaQueries.mobile} {
    gap: 0.8rem;
    flex-direction: column-reverse;
  }
`;
