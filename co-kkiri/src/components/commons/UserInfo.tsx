import { IMAGES } from "@/constants/images";
import DESIGN_TOKEN from "@/styles/tokens";
import { styled } from "styled-components";

interface UserInfoProps {
  user: {
    nickname: string;
    profileImage: string;
  };
  nicknameBold?: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function UserInfo({ user, onClick, nicknameBold }: UserInfoProps) {
  return (
    <UserInfoWrapper onClick={onClick}>
      {user.profileImage ? (
        <ProfileImg src={user.profileImage} alt="프로필 사진" />
      ) : (
        <img src={IMAGES.profileImg.src} alt={IMAGES.profileImg.alt} />
      )}
      <Nickname $bold={nicknameBold}>{user.nickname}</Nickname>
    </UserInfoWrapper>
  );
}

const {
  typography: { font14Medium, font14Semibold },
} = DESIGN_TOKEN;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  object-fit: cover;
`;

const Nickname = styled.div<{ $bold?: boolean }>`
  ${({ $bold }) => ($bold ? `${font14Semibold}` : `${font14Medium}`)}
`;
