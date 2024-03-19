import { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./Gnb.styled";
import { ROUTER_PATH } from "@/lib/path";
import { ICONS } from "@/constants/icons";
import { IMAGES } from "@/constants/images";
import UserInfo from "../UserInfo";
import UserPopover from "../UserPopover";
import AuthModal from "@/components/modals/AuthModal";
import useOpenToggle from "@/hooks/useOpenToggle";

interface GnbProps {
  user?: {
    nickname: string;
    profileImageUrl: string;
  };
  onSideBarClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Gnb({ user, onSideBarClick }: GnbProps) {
  const { HOME_PATH, POST_PATH } = ROUTER_PATH;
  const { ref, isOpen, openToggle: togglePopover } = useOpenToggle();

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleAuthModalOpen = () => {
    setIsAuthModalOpen(!isAuthModalOpen);
  };

  const handlePopoverOpen = () => {
    togglePopover();
  };

  return (
    <div ref={ref}>
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
          {user ? (
            <UserInfo user={user} onClick={handlePopoverOpen} />
          ) : (
            <S.SignButton onClick={handleAuthModalOpen}>로그인/회원가입</S.SignButton>
          )}
        </S.RightGroupBox>
      </S.Container>
      {isAuthModalOpen && <AuthModal onClick={handleAuthModalOpen} onClose={handleAuthModalOpen} />}
      <UserPopover isOpen={isOpen} handleSelectOption={handlePopoverOpen} />
    </div>
  );
}
