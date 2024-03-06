import { MouseEvent } from "react";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import dropdownIcon from "@/assets/icons/dropdown.svg";
import dropdownSelectedIcon from "@/assets/icons/dropdown_selected.svg";

interface DropdownButtonProps {
  text: string;
  isSelected: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function DropdownButton({ text, isSelected, onClick }: DropdownButtonProps) {
  return (
    <Container $isSelected={isSelected} onClick={onClick}>
      {text}
      {isSelected ? (
        <Arrow src={dropdownSelectedIcon} alt="dropdown_selected" />
      ) : (
        <Arrow src={dropdownIcon} alt="dropdown" />
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
  border: 1px solid ${({ $isSelected }) => ($isSelected ? color.secondary : color.gray[200])};
  border-radius: 9.8rem;
  background: ${color.white};
  ${typography.font12Semibold}
`;

const Arrow = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`;
