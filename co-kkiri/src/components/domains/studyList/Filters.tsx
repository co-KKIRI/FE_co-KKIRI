import styled from "styled-components";
import FilterDropdown from "@/components/commons/DropDowns/FilterDropdown";
import SortDropdown from "@/components/commons/DropDowns/SortDropdown";
import DESIGN_TOKEN from "@/styles/tokens";

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

const { mediaQueries } = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaQueries.tablet} {
    padding: 0 3rem;
    width: 76.8rem;
  }

  ${mediaQueries.mobile} {
    padding: 0 1rem;
    width: 34rem;
  }
`;

const FilterWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;
