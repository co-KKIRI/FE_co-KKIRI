import { MouseEvent, ReactNode } from "react";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import { ICONS } from "@/constants/icons";

interface DropdownButtonProps {
  children: ReactNode;
  isSelected: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const { dropdown, dropdownSelected } = ICONS;

export default function DropdownButton({ children, isSelected, onClick }: DropdownButtonProps) {
  return (
    <Container $isSelected={isSelected} onClick={onClick}>
      {children}
      {isSelected ? (
        <Arrow src={dropdownSelected.src} alt={dropdownSelected.alt} />
      ) : (
        <Arrow src={dropdown.src} alt={dropdown.alt} />
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
  border: 1px solid ${({ $isSelected }) => ($isSelected ? color.secondary : color.gray[2])};
  border-radius: 9.8rem;
  background: ${color.white};
  ${typography.font12Semibold}
`;

const Arrow = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`;
