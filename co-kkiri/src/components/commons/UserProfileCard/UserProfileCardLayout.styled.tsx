import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";
import DefaultUserImage from "@/components/modals/EditUserProfileModal/UserImage";
import DetailedPositionChip from "../Chips/PositionChip";

const { color, typography, mediaQueries } = DESIGN_TOKEN;

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
`;

export const ProgressWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.2rem;
`;

export const UserImage = styled(DefaultUserImage)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PositionChip = styled(DetailedPositionChip)`
  margin-bottom: 1.2rem;
`;

export const Nickname = styled.p`
  ${typography.font16Bold}
  margin-bottom: 0.4rem;
`;

export const Career = styled.p`
  ${typography.font12Semibold}
  color: ${color.primary[1]};

  margin-bottom: 2rem;
`;

export const IntroduceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

export const Introduce = styled.p`
  color: ${color.black[1]};

  ${typography.font14Medium}
  text-align: center;
`;

export const Link = styled.a`
  color: ${color.black[3]};
  ${typography.font12Medium}
`;

export const ButtonBox = styled.div`
  padding-top: 2rem;
  width: 37rem;
  ${mediaQueries.mobile} {
    width: 28rem;
  }
`;
