import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";
import close from "@/assets/icons/close.svg";

interface ModalLayoutProps {
  children: React.ReactNode;
  mobileWidth?: number;
  tabletWidth?: number;
  desktopWidth: number;
}

export default function ModalLayout({ children, mobileWidth, tabletWidth, desktopWidth }: ModalLayoutProps) {
  return (
    <Container>
      <ModalBox mobileWidth={mobileWidth} tabletWidth={tabletWidth} desktopWidth={desktopWidth}>
        <CloseButton src={close} alt="닫기 아이콘" />
        {children}
      </ModalBox>
    </Container>
  );
}

const { color, overlayBackDropColor, mediaQueries } = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${overlayBackDropColor};
`;

const ModalBox = styled.div<ModalLayoutProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.2rem;
  width: ${(props) => props.desktopWidth / 10}rem;
  height: auto;
  background-color: ${color.white};
  border-radius: 2rem;

  ${mediaQueries.tablet} {
    width: ${(props) => props.tabletWidth && `${props.tabletWidth / 10}rem`};
  }

  ${mediaQueries.mobile} {
    width: ${(props) => props.mobileWidth && `${props.mobileWidth / 10}rem`};
  }
`;

const CloseButton = styled.img`
  margin-left: auto;
  width: 1.2rem;
  height: 1.2rem;
  position: relative;
  right: 2rem;
  top: 2rem;
`;
