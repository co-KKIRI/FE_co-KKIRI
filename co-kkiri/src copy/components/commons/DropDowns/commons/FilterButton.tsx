import { MouseEvent } from "react";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import { ICONS } from "@/constants/icons";

interface FilterButtonProps {
  selectOption: string;
  isSelected: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const { popover, popoverSelected } = ICONS;

export default function FilterButton({ selectOption, onClick, isSelected }: FilterButtonProps) {
  return (
    <Container $isSelected={isSelected} onClick={onClick}>
      {selectOption}
      {isSelected ? (
        <Arrow $isSelected src={popoverSelected.src} alt={popoverSelected.alt} />
      ) : (
        <Arrow src={popover.src} alt={popover.alt} />
      )}
    </Container>
  );
}

const { color, typography } = DESIGN_TOKEN;

interface Container {
  $isSelected: boolean;
}

const Container = styled.button<Container>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  padding-left: 1.4rem;
  padding-right: 1.2rem;
  width: 10.4rem;
  height: 3.6rem;
  ${({ $isSelected }) =>
    $isSelected
      ? `color:${color.secondary}; border:1px solid ${color.secondary};`
      : `color:${color.black[1]}; border:1px solid ${color.gray[2]}`};
  border-radius: 9.8rem;
  background: ${color.white};
  ${typography.font12Semibold}
`;

interface Arrow {
  $isSelected?: boolean;
}

const Arrow = styled.img<Arrow>`
  width: 1.2rem;
  height: 1.2rem;

  ${({ $isSelected }) => $isSelected && `transform: rotate(180deg);`}
`;