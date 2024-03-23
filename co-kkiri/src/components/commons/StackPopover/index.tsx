import FilterDropdown from "@/components/commons/DropDowns/commons/FilterButton";
import SelectLayout from "./SelectLayout";
import styled from "styled-components";
import useOpenToggle from "@/hooks/useOpenToggle";

interface StacksPopoverProps {
  stacks: string[];
  onStacksChange: (stacks: string[]) => void;
}

export default function StacksPopover({ onStacksChange, stacks }: StacksPopoverProps) {
  const { isOpen, openToggle, ref: stacksPopoverRef } = useOpenToggle();
  const stacksCount = stacks.length ? stacks.length : "";

  const selectOption = `기술 스택 ${stacksCount}`;

  return (
    <Container ref={stacksPopoverRef}>
      <FilterDropdown selectOption={selectOption} isSelected={!!stacksCount} onClick={openToggle} isOpen={isOpen} />
      {isOpen && <SelectLayout stacks={stacks} onStacksChange={onStacksChange} isDeletedChip />}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;
