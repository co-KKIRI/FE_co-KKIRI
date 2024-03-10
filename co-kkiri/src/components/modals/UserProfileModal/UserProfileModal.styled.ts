import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

const { typography, color, mediaQueries } = DESIGN_TOKEN;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export const LinkBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
`;

export const PositionWrapper = styled.div`
  display: flex;
  gap: 0.6rem;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.4rem;
`;

export const LinkWrapper = styled.div`
  ${typography.font14Medium}
  padding-bottom: 4rem;
`;

export const Nickname = styled.div`
  ${typography.font16Bold}
`;

export const Career = styled.div`
  ${typography.font12Semibold}
  color: ${color.primary[1]}
`;

export const Introduce = styled.div`
  ${typography.font14Medium}
  padding-bottom: 1.8rem;
`;

export const Line = styled.div`
  background-color: ${color.gray[2]};
  width: 36rem;
  height: 0.1rem;

  ${mediaQueries.mobile} {
    width: 28rem;
  }
`;
