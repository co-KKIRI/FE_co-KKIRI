import styled from "styled-components";
import { ICONS } from "@/constants/icons";
import DESIGN_TOKEN from "@/styles/tokens";

interface DropdownButtonProps {
  selectOption: string;
  toggleDropdown: () => void;
}

export default function DropdownButton({ selectOption, toggleDropdown }: DropdownButtonProps) {
  return (
    <Container onClick={() => toggleDropdown()}>
      <div>{selectOption}</div>
      <img src={ICONS.triangle.src} alt={ICONS.triangle.alt} />
    </Container>
  );
}

const { typography, color } = DESIGN_TOKEN;

const Container = styled.div`
  height: 3.6rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;

  & div {
    ${typography.font14Semibold};
    color: ${color.black[3]};
  }

  & img {
    width: 1.6rem;
  }
`;
