import * as S from "./SideBar.styled";
import { useWindowSize } from "usehooks-ts";
import ModalLayout from "@/components/modals/ModalLayout";
import SideBarList from "./SideBarList";

interface SideBarProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClose: () => void;
}

export default function SideBar({ onClick, onClose }: SideBarProps) {
  const { width: screenWidth } = useWindowSize();
  const isTabletOrMobile = screenWidth < 1200;

  return (
    <>
      {isTabletOrMobile ? (
        <ModalLayout desktopWidth={0} tabletWidth={210} mobileWidth={210} modalType="sidebar" onClose={onClose}>
          <SideBarList onClick={onClick} />
        </ModalLayout>
      ) : (
        <S.Background>
          <SideBarList onClick={onClick} />
        </S.Background>
      )}
    </>
  );
}
