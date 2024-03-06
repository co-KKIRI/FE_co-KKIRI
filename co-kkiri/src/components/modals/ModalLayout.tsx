import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";
import close from "@/assets/icons/close.svg";

const { color, overlayBackDropColor } = DESIGN_TOKEN;

interface ModalProps {
  children: React.ReactNode;
}

export default function ModalLayout({ children }: ModalProps) {
  return (
    <Layout>
      <ModalBox>
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
const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.2rem;
  width: 55.8rem;
  height: auto;
  background-color: ${color.white};

  border-radius: 2rem;
`;

const CloseButton = styled.img`
  margin-left: auto;
  width: 1.2rem;
  height: 1.2rem;
  position: relative;
  right: 2rem;
  top: 2rem;
`;
