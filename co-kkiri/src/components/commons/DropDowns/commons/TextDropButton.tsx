import styled from "styled-components";
import { ICONS } from "@/constants/icons";
import DESIGN_TOKEN from "@/styles/tokens";

interface DropdownButtonProps {
  selectOption: string;
  onClick: () => void;
  $isSelected: boolean;
}

interface ContainerProps {
  $isSelected: boolean;
}

/**
 * TextDropButton 컴포넌트
 * 텍스트 형태 드랍 버튼
 *
 * @param selectOption: 버튼 innerText
 */

export default function SquareDropButton({ selectOption, onClick, $isSelected }: DropdownButtonProps) {
  return (
    <Container onClick={onClick} $isSelected={$isSelected}>
      <div>{selectOption}</div>
      <img src={ICONS.popover.src} alt={ICONS.popover.alt} />
    </Container>
  );
}

const { color, typography } = DESIGN_TOKEN;

const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: ${color.black[3]};
  ${typography.font14Semibold}

  & img {
    width: 1.8rem;
  }
`;
