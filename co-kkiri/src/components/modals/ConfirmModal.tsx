import styled from "styled-components";
import ModalLayout from "./ModalLayout";
import Button from "../commons/Button";
import DESIGN_TOKEN from "@/styles/tokens";
import { CONFIRM_TYPE } from "@/constants/modal";

export type ConfirmType = keyof typeof CONFIRM_TYPE;

interface ConfirmModalProps {
  type: ConfirmType;
  onClose: () => void;
  onClick: () => void;
}

export default function ConfirmModal({ type, onClose, onClick }: ConfirmModalProps) {
  return (
    <ModalLayout desktopWidth={430} mobileWidth={320} modalType="confirm" onClose={onClose}>
      <Container>
        <Message>{CONFIRM_TYPE[type].massage}</Message>
        <Wrapper>
          <Button variant="primaryLight" onClick={onClose}>
            {CONFIRM_TYPE[type].cancel}
          </Button>
          <Button variant="primary" onClick={onClick}>
            {CONFIRM_TYPE[type].agree}
          </Button>
        </Wrapper>
      </Container>
    </ModalLayout>
  );
}

const { color, mediaQueries } = DESIGN_TOKEN;

const Container = styled.div`
  width: 43rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding-top: 6rem;
  padding-bottom: 3rem;

  ${mediaQueries.mobile} {
    width: 32rem;
    gap: 3rem;
    padding-top: 4rem;
    padding-bottom: 2rem;
  }
`;

const Message = styled.div`
  color: ${color.black[1]};
  font-size: 2rem;
  font-weight: 700;
  line-height: 150%;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 17.9rem);
  gap: 1.2rem;

  ${mediaQueries.mobile} {
    grid-template-columns: repeat(2, 13.6rem);
    gap: 0.8rem;
  }
`;
