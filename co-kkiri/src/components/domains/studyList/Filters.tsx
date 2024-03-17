import styled from "styled-components";
import FilterDropdownButton from "@/components/commons/SelectDropOptions/FilterDropdownButton";
import SortSelectButton from "@/components/commons/SelectDropOptions/SortSelectButton";

interface FiltersProps {
  handleFilterChange: (filterType: string, selectedValue: string) => void;
  handleSort: (option: string) => void;
  selectedOption: string;
}

export default function Filters({ handleFilterChange, handleSort, selectedOption }: FiltersProps) {
  return (
    <Container>
      <FilterWrapper>
        <FilterDropdownButton filterType="position" onSelectFilter={handleFilterChange} />
        <FilterDropdownButton filterType="progressWay" onSelectFilter={handleFilterChange} />
      </FilterWrapper>
      <SortSelectButton handleSort={handleSort} selectedOption={selectedOption} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;
