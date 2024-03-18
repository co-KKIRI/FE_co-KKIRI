import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";
import close from "@/assets/icons/close.svg";
import ModalPortal from "./ModalPortal";
import { useEffect } from "react";

interface ModalBoxProps {
  $mobileWidth?: number;
  $tabletWidth?: number;
  $desktopWidth: number;
  $borderRadius?: number;
}

interface ModalLayoutProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  modalType?: "confirm";
  mobileWidth?: number;
  tabletWidth?: number;
  desktopWidth: number;
  $borderRadius?: number;
}

export default function ModalLayout({
  mobileWidth,
  tabletWidth,
  desktopWidth,
  children,
  onClick,
  modalType,
  $borderRadius = 20,
}: ModalLayoutProps) {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      width: 100%;`;
    return () => {
      document.body.style.cssText = "";
    };
  }, []);

  return (
    <ModalPortal>
      <Container>
        <ModalBox
          $mobileWidth={mobileWidth}
          $tabletWidth={tabletWidth}
          $desktopWidth={desktopWidth}
          $borderRadius={$borderRadius}>
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
  width: ${({ $desktopWidth }) => $desktopWidth / 10}rem;
  height: auto;
  background-color: ${color.white};
  border-radius: ${({ $borderRadius }) => $borderRadius && `${$borderRadius / 10}rem`};

  ${mediaQueries.tablet} {
    width: ${({ $tabletWidth }) => $tabletWidth && `${$tabletWidth / 10}rem`};
  }

  ${mediaQueries.mobile} {
    width: ${({ $mobileWidth }) => $mobileWidth && `${$mobileWidth / 10}rem`};
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
