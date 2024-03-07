import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";
import close from "@/assets/icons/close.svg";

const { color, overlayBackDropColor, mediaQueries } = DESIGN_TOKEN;

interface ModalLayoutProps {
  children: React.ReactNode;
  mobileWidth?: number;
  tabletWidth?: number;
  desktopWidth: number;
}

export default function ModalLayout({ children, mobileWidth, tabletWidth, desktopWidth }: ModalLayoutProps) {
  return (
    <Layout>
      <ModalBox mobileWidth={mobileWidth} tabletWidth={tabletWidth} desktopWidth={desktopWidth}>
        <CloseButton src={close} alt="닫기 아이콘" />
        {children}
      </ModalBox>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${overlayBackDropColor};
`;

const ModalBox = styled.div<{ mobileWidth?: number; tabletWidth?: number; desktopWidth?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.2rem;
  width: ${(props) => props.desktopWidth}rem;
  height: auto;
  background-color: ${color.white};
  border-radius: 2rem;

  ${mediaQueries.tablet} {
    width: ${(props) => props.tabletWidth}rem;
  }

  ${mediaQueries.mobile} {
    width: ${(props) => props.mobileWidth}rem;
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
