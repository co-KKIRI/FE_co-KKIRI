import styled from "styled-components";
import { ICONS } from "@/constants/icons";

interface DropdownButtonProps {
  selectOption: string;
  toggleDropdown: () => void;
  selectType?: string;
}

export default function DefaultDropdownButton({ selectOption, toggleDropdown, selectType }: DropdownButtonProps) {
  return (
    <Container>
      <div onClick={() => toggleDropdown()}>{selectOption}</div>
      <img src={selectType === "sort" ? ICONS.triangle.src : ICONS.popover.src} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
