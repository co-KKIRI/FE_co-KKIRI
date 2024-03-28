import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

const { typography, color, mediaQueries } = DESIGN_TOKEN;

export const Container = styled.div`
  width: 43rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  ${mediaQueries.mobile} {
    width: 32rem;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 43rem;
  ${mediaQueries.mobile} {
    width: 32rem;
  }
`;

export const Scout = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const DeleteUser = styled.button`
  ${typography.font14Semibold}
  color: ${color.gray[1]};
`;
