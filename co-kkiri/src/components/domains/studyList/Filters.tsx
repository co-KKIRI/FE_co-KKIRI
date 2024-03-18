import styled from "styled-components";
import FilterDropdown from "@/components/commons/DropDowns/FilterDropdown";
import SortDropdown from "@/components/commons/DropDowns/SortDropdown";

interface FiltersProps {
  handleFilterChange: (filterType: string, selectedValue: string) => void;
  handleSortChange: (option: string) => void;
}

export default function Filters({ handleFilterChange, handleSortChange }: FiltersProps) {
  return (
    <Container>
      <FilterWrapper>
        <FilterDropdown menuInfoType="position" onSelectFilter={handleFilterChange} />
        <FilterDropdown menuInfoType="progressWay" onSelectFilter={handleFilterChange} />
      </FilterWrapper>
      <SortDropdown handleSortChange={handleSortChange} />
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
