import { useState } from "react";
import styled from "styled-components";
import ScoutFilters from "@/components/domains/scout/ScoutFilters";
import ScoutCards from "@/components/domains/scout/ScoutCards";
import { searchedMemberProfiles } from "@/lib/mock/scout/searchMemberList";
import DESIGN_TOKEN from "@/styles/tokens";
import SearchInput from "@/components/commons/SearchInput";
import Pagination from "@/components/commons/Pagination_test/Pagination";
export interface SelectedFilter {
  position: string;
  stack: string[];
}

export default function Scout() {
  const [selectedFilter, setSelectedFilter] = useState<SelectedFilter>({
    position: "",
    stack: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const handlePositionChange = (position: string) => setSelectedFilter((prev) => ({ ...prev, position }));

  const handleStacksChange = (stack: string[]) => setSelectedFilter((prev) => ({ ...prev, stack }));

  return (
    <Container>
      <Box>
        <Wrapper>
          <Title>스카우트</Title> <SearchInput placeholder="멤버를 찾아보세요!" />
        </Wrapper>
        <ScoutFilters
          selectedFilter={selectedFilter}
          handleStacksChange={handleStacksChange}
          handlePositionChange={handlePositionChange}
        />
        <ScoutCards userProfiles={searchedMemberProfiles} />
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
      </Box>
    </Container>
  );
}

const {
  spacing,
  color,
  typography: { font20Bold },
  mediaQueries,
} = DESIGN_TOKEN;

const Container = styled.div`
  padding: ${spacing.desktop};
  padding-top: 2.8rem;
  padding-bottom: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${mediaQueries.tablet} {
    padding: ${spacing.tablet};
    padding-bottom: 12rem;
  }
  ${mediaQueries.mobile} {
    padding: ${spacing.mobile};
    padding-bottom: 4.8rem;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.8rem;

  ${mediaQueries.mobile} {
    margin-bottom: 1.8rem;
  }

  ${mediaQueries.mobile} {
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
    margin-bottom: 1.6rem;
  }
`;

const Title = styled.div`
  ${font20Bold}
  color:${color.black[1]}
`;
