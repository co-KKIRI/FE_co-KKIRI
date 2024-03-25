import styled from "styled-components";
import CircularProgressBar from "../CircularProgressBar";
import DefaultUserImage from "@/components/modals/EditUserProfileModal/UserImage";
import DetailedPositionChip from "../Chips/PositionChip";
import DESIGN_TOKEN from "@/styles/tokens";
import Stacks from "../Stacks";
import { isEmptyValue } from "@/utils/validationUtils";
import Button from "../Button";
import { useState } from "react";
import EditUserProfileModal from "@/components/modals/EditUserProfileModal";

interface UserProfileCardProps {
  profileImgUrl?: string;
  nickname: string;
  position: string | null;
  career: number | null;
  stacks: string[];
  score: number;
  introduce?: string | null;
  link?: string | null;
  cardType?: "mypage" | "scout";
}

export default function UserProfileCardLayout({
  profileImgUrl,
  nickname,
  position,
  career,
  stacks,
  score,
  introduce,
  link,
  cardType,
}: UserProfileCardProps) {
  const [isEditModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleEditModalOpen = () => {
    setIsModalOpen(!isEditModalOpen);
  };
  return (
    <Container>
      <InfoBox>
        <ProgressWrapper>
          <CircularProgressBar size={130} strokeWidth={8} percentage={score} animationDuration={1} />
          <UserImage profileImgUrl={profileImgUrl} onSelect={() => {}} />
        </ProgressWrapper>
        <PositionChip label={isEmptyValue(position) ? emptyMessages.position : position!} />
        <Nickname>{nickname}</Nickname>
        <Career>{isEmptyValue(position) ? emptyMessages.career : `경력 ${career}년차`}</Career>
        <Stacks stacks={stacks} />
      </InfoBox>
      {!(cardType === "scout") && (
        <Box>
          <Introduce>{isEmptyValue(introduce) ? emptyMessages.introduce : introduce}</Introduce>
          <Link href={link || ""} target="_blank" rel="noopener noreferrer">
            <p>{isEmptyValue(link) ? emptyMessages.link : link}</p>
          </Link>
        </Box>
      )}
      {cardType === "mypage" && (
        <ButtonBox>
          <Button variant="ghost" onClick={handleEditModalOpen}>
            수정 하기
          </Button>
        </ButtonBox>
      )}
      {isEditModalOpen && <EditUserProfileModal onClose={handleEditModalOpen} />}
    </Container>
  );
}

const emptyMessages = {
  career: "경력을 아직 작성하지 않았어요!",
  position: "포지션",
  link: "링크 없음",
  introduce: "한줄소개를 아직 작성하지 않았어요!",
  tags: "아직 받은 태그가 없어요.",
};

const { color, typography, mediaQueries } = DESIGN_TOKEN;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
`;

const ProgressWrapper = styled.div`
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

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
`;

const Introduce = styled.p`
  color: ${color.black[1]};

  ${typography.font14Medium}
  text-align: center;
`;

const Link = styled.a`
  color: ${color.black[3]};
  ${typography.font12Medium}
`;

const ButtonBox = styled.div`
  padding-top: 2rem;
  width: 37rem;
  ${mediaQueries.mobile} {
    width: 28rem;
  }
`;
