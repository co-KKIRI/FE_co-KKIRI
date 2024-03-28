import styled from "styled-components";
import { ICONS } from "@/constants/icons";
import DESIGN_TOKEN from "@/styles/tokens";
import { MouseEvent, ReactNode, RefObject } from "react";
import { RefCallBack } from "react-hook-form";

interface DropdownButtonProps {
  selectOption: ReactNode;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  $iconType: "date" | "default";
  $isSelected: boolean;
  isError?: boolean;
  $isDate?: boolean;
  dropButtonRef?: RefObject<HTMLButtonElement> | RefCallBack;
}

interface ContainerProps {
  $iconType: "date" | "default";
  $isSelected: boolean;
  $isReactElement: boolean;
  $isError?: boolean;
}

/**
 * SquareDropButton 컴포넌트
 * 네모 형태 드랍 버튼
 *
 * @param selectOption: 버튼 innerText
 * @param $iconType: 버튼 innerIcon
 * @property {"date"|"default"} $iconType
 */

export default function SquareDropButton({
  selectOption,
  onClick,
  $iconType,
  $isSelected,
  isError,
  dropButtonRef,
  $isDate,
}: DropdownButtonProps) {
  const iconSources = {
    date: { src: ICONS.calendar.src, alt: ICONS.calendar.alt },
    default: { src: ICONS.popover.src, alt: ICONS.popover.alt },
  };

  return (
    <Container
      type="button"
      onClick={onClick}
      $iconType={$iconType}
      $isSelected={$isSelected}
      $isReactElement={typeof selectOption !== "string"}
      $isError={isError}
      ref={dropButtonRef}>
      <Box>{selectOption}</Box>
      <img src={iconSources[$iconType].src} alt={iconSources[$iconType].alt} />
    </Container>
  );
}

const { color, typography } = DESIGN_TOKEN;

const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({ $isReactElement }) => ($isReactElement ? `1.2rem 2rem` : `0 2rem`)};
  gap: 0.4rem;
  border-radius: 0.5rem;
  height: ${({ $isReactElement }) => ($isReactElement ? `fit-content` : `4.8rem`)};
  min-height: 4.8rem;
  ${typography.font16Medium}
  color : ${({ $isSelected }) => ($isSelected ? color.black[1] : color.black[3])};
  border: 0.1rem solid ${color.gray[2]};

  & img {
    width: 1.8rem;
  }

  ${({ $isError }) =>
    $isError &&
    `  border-color: ${color.red};
`}
`;

const Box = styled.div`
  flex-shrink: 1;
`;
