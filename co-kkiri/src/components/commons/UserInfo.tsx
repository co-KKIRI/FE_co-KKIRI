import { IMAGES } from "@/constants/images";
import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

interface UserInfoProps {
  user: {
    nickname: string;
    profileImage: string;
  };
}

export default function UserInfo({ user }: UserInfoProps) {
  return (
    <UserInfoWrapper>
      {user.profileImage ? (
        <ProfileImg src={user.profileImage} alt="프로필 사진" />
      ) : (
        <img src={IMAGES.profileImg.src} alt={IMAGES.profileImg.alt} />
      )}
      <Nickname>{user.nickname}</Nickname>
    </UserInfoWrapper>
  );
}

const { typography } = DESIGN_TOKEN;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const ProfileImg = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  object-fit: cover;
`;

const Nickname = styled.div`
  ${typography.font14Medium};
`;
