import FilterDropdown from "@/components/commons/DropDowns/commons/FilterButton";
import SelectLayout from "./SelectLayout";
import styled from "styled-components";
import useOpenToggle from "@/hooks/useOpenToggle";

interface StacksPopoverProps {
  onStacksChange: (stacks: string[]) => void;
}

export default function StacksPopover({ onStacksChange }: StacksPopoverProps) {
  const {isOpen, openToggle} = useOpenToggle();

  return (
    <Container>
      <FilterDropdown selectOption="기술 스택" isSelected={isOpen} onClick={openToggle} />
      {isOpen && <SelectLayout onStacksChange={onStacksChange} />}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;
