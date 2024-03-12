import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";
import close from "@/assets/icons/close.svg";
import ModalPortal from "./ModalPortal";

interface ModalBoxProps {
  $mobileWidth?: number;
  $tabletWidth?: number;
  $desktopWidth: number;
}

interface ModalLayoutProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  modalType?: "confirm";
  mobileWidth?: number;
  tabletWidth?: number;
  desktopWidth: number;
}

export default function ModalLayout({
  mobileWidth,
  tabletWidth,
  desktopWidth,
  children,
  onClick,
  modalType,
}: ModalLayoutProps) {
  return (
    <ModalPortal>
      <Container>
        <ModalBox $mobileWidth={mobileWidth} $tabletWidth={tabletWidth} $desktopWidth={desktopWidth}>
          {!modalType && "confirm" && (
            <CloseButton onClick={onClick}>
              <img src={close} alt="닫기 아이콘" />
            </CloseButton>
          )}
          {children}
        </ModalBox>
      </Container>
    </ModalPortal>
  );
}

const { color, overlayBackDropColor, mediaQueries } = DESIGN_TOKEN;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${overlayBackDropColor};
`;

const ModalBox = styled.div<ModalBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.2rem;
  width: ${(props) => props.$desktopWidth / 10}rem;
  height: auto;
  background-color: ${color.white};
  border-radius: 2rem;

  ${mediaQueries.tablet} {
    width: ${(props) => props.$tabletWidth && `${props.$tabletWidth / 10}rem`};
  }

  ${mediaQueries.mobile} {
    width: ${(props) => props.$mobileWidth && `${props.$mobileWidth / 10}rem`};
  }
`;

const CloseButton = styled.button`
  margin-left: auto;
  width: 1.2rem;
  height: 1.2rem;
  position: relative;
  right: 2rem;
  top: 2rem;
`;
