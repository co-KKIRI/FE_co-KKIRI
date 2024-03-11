import { IMAGES } from "@/constants/images";
import { ROUTER_PATH } from "@/lib/path";
import DESIGN_TOKEN from "@/styles/tokens";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface UserInfoProps {
  user: {
    nickname: string;
    profileImage: string;
  };
}

export default function UserInfo({ user }: UserInfoProps) {
  const { MY_PAGE } = ROUTER_PATH;
  return (
    <UserInfoWrapper>
      {user.profileImage ? (
        <ProfileImg src={user.profileImage} alt="프로필 사진" />
      ) : (
        <img src={IMAGES.profileImg.src} alt={IMAGES.profileImg.alt} />
      )}
      <Link to={MY_PAGE}>
        <Nickname>{user.nickname}</Nickname>
      </Link>
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
