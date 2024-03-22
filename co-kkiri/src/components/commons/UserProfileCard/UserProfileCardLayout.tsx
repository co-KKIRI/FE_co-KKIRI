import styled from "styled-components";
import CircularProgressBar from "../CircularProgressBar";
import DefaultUserImage from "@/components/modals/EditUserProfileModal/UserImage";
import PositionChip from "../Chips/PositionChip";
import DESIGN_TOKEN from "@/styles/tokens";
import Stacks from "../Stacks";

interface UserProfileCardProps {
  profileImgUrl?: string;
  nickname: string;
  position: string;
  career: number;
  stacks: string[];
}

export default function UserProfileCardLayout({
  profileImgUrl,
  nickname,
  position,
  career,
  stacks,
}: UserProfileCardProps) {
  return (
    <Container>
      <ProgressBox>
        <CircularProgressBar size={130} strokeWidth={8} percentage={50} animationDuration={1} />
        <UserImage profileImgUrl={profileImgUrl} onSelect={() => {}} />
      </ProgressBox>
      <PositionChip label={position} />
      <Nickname>{nickname}</Nickname>
      <Career>경력 {career}년차</Career>
      <Stacks stacks={stacks} />
    </Container>
  );
}

const { color, typography } = DESIGN_TOKEN;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

const ProgressBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserImage = styled(DefaultUserImage)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Nickname = styled.p`
  ${typography.font16Bold}
`;

const Career = styled.p`
  ${typography.font12Semibold}
  color: ${color.primary[1]};
`;
