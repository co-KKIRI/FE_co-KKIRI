import styled from "styled-components";
import FilterDropdown from "@/components/commons/DropDowns/FilterDropdown";
import StacksPopover from "@/components/commons/StackPopover";
import { useState } from "react";
import { SelectedFilter } from "@/pages/Scout";
import { DROPDOWN_INFO } from "@/constants/dropDown";

interface ScoutFiltersProps {
  selectedFilter: SelectedFilter;
  handleStacksChange: (stacks: string[]) => void;
  handlePositionChange: (positions: string) => void;
}

export default function ScoutFilters({ selectedFilter, handleStacksChange, handlePositionChange }: ScoutFiltersProps) {
  const { filter } = DROPDOWN_INFO;

  const onSelectPosition = (type: string, selectedValue: string) => {
    const selectedPosition = selectedValue === filter.position.options[0] ? "" : selectedValue;
    handlePositionChange(selectedPosition);
  };

  return (
    <Container>
      <FilterDropdown menuInfoType="position" onSelectFilter={onSelectPosition} />
      <StacksPopover stacks={selectedFilter.stacks} onStacksChange={(stack) => handleStacksChange(stack)} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
