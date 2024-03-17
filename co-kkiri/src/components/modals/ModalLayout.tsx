import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";
import close from "@/assets/icons/close.svg";
import ModalPortal from "./ModalPortal";
import { useEffect, useRef } from "react";
import { slideIn, slideOut } from "@/utils/animation";
import { useOnClickOutside } from "usehooks-ts";

interface ModalLayoutProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  modalType?: "confirm" | "sidebar";
  mobileWidth?: number;
  tabletWidth?: number;
  desktopWidth: number;
  onClose: () => void;
}

export default function ModalLayout({
  mobileWidth,
  tabletWidth,
  desktopWidth,
  children,
  onClick,
  modalType,
  onClose,
}: ModalLayoutProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, onClose);

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
      <Container $isSidebar={modalType === "sidebar"}>
        <ModalBox
          ref={modalRef}
          $mobileWidth={mobileWidth}
          $tabletWidth={tabletWidth}
          $desktopWidth={desktopWidth}
          $isSidebar={modalType === "sidebar"}>
          {!modalType && ("confirm" || "sidebar") && (
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

interface ModalBoxProps {
  $mobileWidth?: number;
  $tabletWidth?: number;
  $desktopWidth: number;
  $isSidebar?: boolean;
}

const Container = styled.div<{ $isSidebar?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: ${(props) => (props.$isSidebar ? "flex-start" : "center")};
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
  animation: ${(props) => (props.$isSidebar ? slideIn : slideOut)} 0.2s forwards;

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
