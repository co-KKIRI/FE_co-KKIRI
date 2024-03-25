import styled from "styled-components";
import CircularProgressBar from "../CircularProgressBar";
import DefaultUserImage from "@/components/modals/EditUserProfileModal/UserImage";
import DetailedPositionChip from "../Chips/PositionChip";
import DESIGN_TOKEN from "@/styles/tokens";
import Stacks from "../Stacks";
import { isEmptyValue } from "@/utils/validationUtils";

interface UserProfileCardProps {
  profileImgUrl?: string;
  nickname: string;
  position: string | null;
  career: number | null;
  stacks: string[];
  score: number;
}

export default function UserProfileCardLayout({
  profileImgUrl,
  nickname,
  position,
  career,
  stacks,
  score,
}: UserProfileCardProps) {
  return (
    <Container>
      <ProgressBox>
        <CircularProgressBar size={130} strokeWidth={8} percentage={score} animationDuration={1} />
        <UserImage profileImgUrl={profileImgUrl} onSelect={() => {}} />
      </ProgressBox>
      <PositionChip label={isEmptyValue(position) ? EmptyMessage.position : position!} />
      <Nickname>{nickname}</Nickname>
      <Career>{isEmptyValue(position) ? EmptyMessage.career : `경력 ${career}년차`}</Career>
      <Stacks stacks={stacks} />
    </Container>
  );
}

const EmptyMessage = {
  career: "경력을 아직 작성하지 않았어요!",
  position: "포지션",
};

const { color, typography } = DESIGN_TOKEN;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProgressBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 1.2rem;
`;

const UserImage = styled(DefaultUserImage)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PositionChip = styled(DetailedPositionChip)`
  margin-bottom: 1.2rem;
`;

const Nickname = styled.p`
  ${typography.font16Bold}
  margin-bottom: 0.4rem;
`;

const Career = styled.p`
  ${typography.font12Semibold}
  color: ${color.primary[1]};

  margin-bottom: 2rem;
`;
