import { ICONS } from "@/constants/icons";
import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

interface ResetButtonProps {
  onReset: () => void;
  className?: string;
}

export default function ResetButton({ onReset, className }: ResetButtonProps) {
  return (
    <Container onClick={onReset} className={className}>
      <img src={ICONS.reset.src} alt={ICONS.reset.alt} />
      <p>초기화</p>
    </Container>
  );
}

const { color, typography } = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  color: ${color.black[3]};

  ${typography.font12Semibold}

  img {
    width: 1.4rem;
    height: 1.4rem;
    fill: ${color.black[3]};
  }

  &:hover {
    cursor: pointer;
    color: ${color.black[1]};

    img {
      animation: rotateAnimation 1s ease-in-out infinite;
    }
  }

  @keyframes rotateAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
`;
