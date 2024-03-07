import * as S from "./Gnb.styled";
import { ROUTER_PATH } from "@/lib/path";
import { ICONS } from "@/constants/icons";
import { IMAGES } from "@/constants/images";

// 임시
interface User {
  nickname: string;
  profileImage: string;
}

interface GnbProps {
  user?: User;
  onCategoryClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onLoginClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onSignupClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Gnb({ user, onCategoryClick, onLoginClick, onSignupClick }: GnbProps) {
  const { POST_PATH, MY_PAGE } = ROUTER_PATH;
  return (
    <S.Container>
      <S.LeftGroupBox>
        <button onClick={onCategoryClick}>
          <img src={ICONS.category.src} alt={ICONS.category.alt} />
        </button>
        <a href="/">
          <S.Logo src={IMAGES.logo.src} alt={IMAGES.logo.alt} />
        </a>
      </S.LeftGroupBox>
      <S.RightGroupBox>
        <S.PostButton href={POST_PATH}>스터디 모집하기</S.PostButton>
        {user ? (
          <S.UserInfoWrapper>
            {user.profileImage ? (
              <img src={user.profileImage} alt="프로필 사진" />
            ) : (
              <img src={IMAGES.profileImg.src} alt={IMAGES.profileImg.alt} />
            )}
            <S.Nickname href={MY_PAGE}>{user.nickname}</S.Nickname>
          </S.UserInfoWrapper>
        ) : (
          <div>
            <S.SignButton onClick={onLoginClick}>로그인</S.SignButton>/
            <S.SignButton onClick={onSignupClick}>회원가입</S.SignButton>
          </div>
        )}
      </S.RightGroupBox>
    </S.Container>
  );
}
