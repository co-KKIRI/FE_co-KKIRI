import { IMAGES } from "@/constants/images";
import * as S from "./Gnb.styled";
import { UserInfoEditApiRequestDto } from "@/lib/api/myPage/type";

interface GnbUserInfoProps {
  user: UserInfoEditApiRequestDto;
  onClick: () => void;
}

export default function GnbUserInfo({ user, onClick }: GnbUserInfoProps) {
  return (
    <S.UserInfoWrapper onClick={onClick}>
      {user.profileImageUrl ? (
        <S.ProfileImg src={user.profileImageUrl} alt="프로필 사진" />
      ) : (
        <img src={IMAGES.profileImg.src} alt={IMAGES.profileImg.alt} />
      )}
      <S.Nickname>{user.nickname}</S.Nickname>
    </S.UserInfoWrapper>
  );
}
