import * as S from "./Gnb.styled";
import { ROUTER_PATH } from "@/lib/path";
import { ICONS } from "@/constants/icons";
import { IMAGES } from "@/constants/images";
import { Link } from "react-router-dom";
import UserInfo from "../UserInfo";
import { useState } from "react";
import AuthModal from "@/components/modals/AuthModal";

interface GnbProps {
  user?: {
    nickname: string;
    profileImage: string;
  }; // 미정
  onSideBarClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Gnb({ user, onSideBarClick }: GnbProps) {
  const { HOME_PATH, POST_PATH } = ROUTER_PATH;
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleAuthModalOpen = () => {
    setIsAuthModalOpen(!isAuthModalOpen);
  };

  return (
    <S.Container>
      <S.LeftGroupBox>
        <button onClick={onSideBarClick}>
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
        {user ? <UserInfo user={user} /> : <S.SignButton onClick={handleAuthModalOpen}>로그인/회원가입</S.SignButton>}
      </S.RightGroupBox>
      {isAuthModalOpen && <AuthModal onClick={handleAuthModalOpen} />}
    </S.Container>
  );
}
