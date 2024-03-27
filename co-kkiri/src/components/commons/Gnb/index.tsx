import { Link } from "react-router-dom";
import * as S from "./Gnb.styled";
import { ROUTER_PATH } from "@/lib/path";
import { ICONS } from "@/constants/icons";
import { IMAGES } from "@/constants/images";
import UserPopover from "../UserPopover";
import AuthModal from "@/components/modals/AuthModal";
import useOpenToggle from "@/hooks/useOpenToggle";
import useAuthModalToggleStore from "@/stores/authModalToggle";
import GnbUserInfo from "./GnbUserInfo";

interface GnbProps {
  user?: {
    id: number;
    nickname: string;
    profileImageUrl: string;
  };
  onSideBarClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Gnb({ user, onSideBarClick }: GnbProps) {
  const { HOME_PATH, RECRUIT_PATH } = ROUTER_PATH;
  const { ref, isOpen: isPopoverOpen, openToggle: togglePopover } = useOpenToggle();

  const isAuthModalOpen = useAuthModalToggleStore((state) => state.isAuthModalOpen);
  const toggleAuthModal = useAuthModalToggleStore((state) => state.toggleAuthModal);

  const handlePopoverOpen = () => {
    togglePopover();
  };

  return (
    <S.Container ref={ref}>
      <S.Box>
        <S.LeftGroupWrapper>
          <button onClick={onSideBarClick}>
            <img src={ICONS.category.src} alt={ICONS.category.alt} />
          </button>
          <Link to={HOME_PATH}>
            <S.Logo src={IMAGES.logo.src} alt={IMAGES.logo.alt} />
          </Link>
        </S.LeftGroupWrapper>
        <S.RightGroupWrapper>
          <Link to={RECRUIT_PATH}>
            <S.PostButton>스터디 모집하기</S.PostButton>
          </Link>
          {user ? (
            <GnbUserInfo user={user} onClick={handlePopoverOpen} />
          ) : (
            <S.SignButton onClick={toggleAuthModal}>로그인/회원가입</S.SignButton>
          )}
        </S.RightGroupWrapper>
      </S.Box>
      {isAuthModalOpen && <AuthModal onClick={toggleAuthModal} onClose={toggleAuthModal} />}
      {user && <UserPopover isPopoverOpen={isPopoverOpen} handleSelectOption={handlePopoverOpen} />}
    </S.Container>
  );
}
