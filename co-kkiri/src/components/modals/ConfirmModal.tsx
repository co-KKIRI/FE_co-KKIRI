import styled from "styled-components";
import ModalLayout from "./ModalLayout";
import Button from "../commons/Button";
import DESIGN_TOKEN from "@/styles/tokens";
import { CONFIRM_TYPE } from "@/constants/modal";

type ConfirmType = keyof typeof CONFIRM_TYPE;

interface ConfirmModalProps {
  type: ConfirmType;
}

export default function ConfirmModal({ type }: ConfirmModalProps) {
  return (
    <ModalLayout desktopWidth={430} mobileWidth={320} modalType="confirm">
      <Container>
        <Message>{CONFIRM_TYPE[type].massage}</Message>
        <Wrapper>
          <Button variant="primaryLight">{CONFIRM_TYPE[type].cancel}</Button>
          <Button variant="primary">{CONFIRM_TYPE[type].agree}</Button>
        </Wrapper>
      </Container>
    </ModalLayout>
  );
}

const { color, mediaQueries } = DESIGN_TOKEN;

const Container = styled.div`
  width: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding-top: 6rem;
  padding-bottom: 4rem;

  ${mediaQueries.mobile} {
    width: 26rem;
    padding-top: 5rem;
    padding-bottom: 3rem;
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
  grid-template-columns: repeat(2, 16.9rem);
  gap: 1.2rem;

  ${mediaQueries.mobile} {
    display: flex;
    flex-direction: column-reverse;
    gap: 0.8rem;
    width: 100%;
  }
`;
