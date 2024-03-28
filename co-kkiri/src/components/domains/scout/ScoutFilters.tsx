import styled from "styled-components";
import FilterDropdown from "@/components/commons/DropDowns/FilterDropdown";
import StacksPopover from "@/components/commons/StackPopover";
import { SelectedFilter } from "@/pages/Scout";
import { DROPDOWN_FILTER_INFO } from "@/constants/dropDown";
import { Option } from "@/components/commons/Form/RHFDropdown";

interface ScoutFiltersProps {
  selectedFilter: SelectedFilter;
  handleStacksChange: (stacks: string[]) => void;
  handlePositionChange: (positions: string) => void;
}

export default function ScoutFilters({ selectedFilter, handleStacksChange, handlePositionChange }: ScoutFiltersProps) {
  const { filter:{
    position
  } } = DROPDOWN_FILTER_INFO;

  const onSelectPosition = (selectedOption: Option) => {
    handlePositionChange(selectedOption.label);
  };

  return (
    <Container>
      <FilterDropdown  onSelectFilter={onSelectPosition} placeholder={"포지션"} options={position} />
      <StacksPopover stacks={selectedFilter.stacks} onStacksChange={(stack) => handleStacksChange(stack)} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
