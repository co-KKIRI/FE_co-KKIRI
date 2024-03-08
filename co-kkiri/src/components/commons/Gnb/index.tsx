import * as S from "./Gnb.styled";
import { ROUTER_PATH } from "@/lib/path";
import { ICONS } from "@/constants/icons";
import { IMAGES } from "@/constants/images";
import { Link } from "react-router-dom";
import UserInfo from "../UserInfo";

interface GnbProps {
  user?: {
    nickname: string;
    profileImage: string;
  }; // 미정
  onCategoryClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onLoginClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onSignupClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Gnb({ user, onCategoryClick, onLoginClick, onSignupClick }: GnbProps) {
  const { HOME_PATH, POST_PATH } = ROUTER_PATH;
  return (
    <S.Container>
      <S.LeftGroupBox>
        <button onClick={onCategoryClick}>
          <img src={ICONS.category.src} alt={ICONS.category.alt} />
        </button>
        <Link to={HOME_PATH}>
          <S.Logo src={IMAGES.logo.src} alt={IMAGES.logo.alt} />
        </Link>
      </S.LeftGroupBox>
      <S.RightGroupBox>
        <Link to={POST_PATH}>
          <S.PostButton>스터디 모집하기</S.PostButton>
        </Link>
        {user ? (
          <UserInfo user={user} />
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
