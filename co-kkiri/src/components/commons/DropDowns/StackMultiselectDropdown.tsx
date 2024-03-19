import useOpenToggle from "@/hooks/useOpenToggle";
import SquareDropButton from "./commons/SquareDropButton";
import styled from "styled-components";
import DefaultSelectLayout from "../StackPopover/SelectLayout";
import { useRef, useState } from "react";
import DeleteStackChipList from "../StackPopover/DeleteStackChipList";
import { useResizeObserver } from "usehooks-ts";

interface MultiselectDropdownProps {
  selectedOptions: string[];
  limit?: number;
  onSelectChange: (selectedOptions: string[]) => void;
}

export default function MultiselectDropdown({ selectedOptions, limit, onSelectChange }: MultiselectDropdownProps) {
  const { isOpen, openToggle, ref } = useOpenToggle();
  const dropButtonRef = useRef<HTMLButtonElement>(null);
  const { height } = useResizeObserver({
    ref: dropButtonRef,
    box: "border-box",
  });

  return (
    <Container ref={ref}>
      <SquareDropButton
        selectOption={
          <DeleteStackChipList
            stacks={selectedOptions}
            onDeleteStack={(stack) => {
              onSelectChange(selectedOptions.filter((prevStack) => prevStack !== stack));
            }}
          />
        }
        onClick={(e) => {
          if (e.target !== e.currentTarget) return;

          openToggle();
        }}
        $iconType="default"
        $isSelected={isOpen}
        dropButtonRef={dropButtonRef}
      />
      {isOpen && (
        <SelectLayout
          stacks={selectedOptions}
          limit={limit}
          onStacksChange={(stacks) => onSelectChange([...stacks])}
          $top={height ? height : undefined}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

interface SelectLayoutProps {
  $top: number | undefined;
}

const SelectLayout = styled(DefaultSelectLayout)<SelectLayoutProps>`
  border-radius: 0.5rem;
  top: ${({ $top }) => ($top ? `${$top / 10 + 0.6}rem` : `5.4rem`)};
`;
