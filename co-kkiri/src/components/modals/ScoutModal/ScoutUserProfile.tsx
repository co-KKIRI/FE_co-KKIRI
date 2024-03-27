import PositionChip from "@/components/commons/Chips/PositionChip";
import { IMAGES } from "@/constants/images";
import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

interface ScoutUserProfileProps {
  nickname: string;
  profileImageUrl?: string;
  position?: string;
}

export default function ScoutUserProfile({ nickname, profileImageUrl, position }: ScoutUserProfileProps) {
  return (
    <Container>
      <Profile src={profileImageUrl || IMAGES.profileImg.src} alt={IMAGES.profileImg.alt} />
      <Nickname>{nickname}</Nickname>
      {position && <PositionChip label={position} />}
    </Container>
  );
}

const { color, typography } = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

const Profile = styled.img`
  width: 4.8rem;
  height: 4.8rem;

  border-radius: 9999rem;
  border: 0.1rem solid ${color.gray[3]};

  object-fit: cover;
`;

const Nickname = styled.p`
  color: ${color.black[1]};
  ${typography.font16Medium}
`;
