import styled from "styled-components";
import FilterDropdown from "@/components/commons/DropDowns/FilterDropdown";
import SortDropdown from "@/components/commons/DropDowns/SortDropdown";
import DESIGN_TOKEN from "@/styles/tokens";
import { Option } from "@/components/commons/Form/RHFDropdown";
import { DROPDOWN_FILTER_INFO } from "@/constants/dropDown";

interface FiltersProps {
  handleFilterChange: (selectedFilter: Option) => void;
  handleSortChange: (selectedOption: Option) => void;
}

export default function Filters({ handleFilterChange, handleSortChange }: FiltersProps) {
  const {
    filter: { position, progressWay },
    sort: { sort },
  } = DROPDOWN_FILTER_INFO;

  return (
    <Container>
      <FilterWrapper>
        <FilterDropdown onSelectFilter={handleFilterChange} placeholder={"포지션"} options={position} />
        <FilterDropdown onSelectFilter={handleFilterChange} placeholder={"진행 방식"} options={progressWay} />
      </FilterWrapper>
      <SortDropdown handleSortChange={handleSortChange} placeholder={"최신순"} options={sort} />
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
