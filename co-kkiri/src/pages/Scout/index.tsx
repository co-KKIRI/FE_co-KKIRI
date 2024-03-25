import { useState } from "react";
import * as S from "./styled";
import ScoutFilters from "@/components/domains/scout/ScoutFilters";
import ScoutCards from "@/components/domains/scout/ScoutCards";
import SearchInput from "@/components/commons/SearchInput";
import Pagination from "@/components/commons/Pagination_test/Pagination";
import { searchedMemberProfiles } from "@/lib/mock/scout/searchMemberList";

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
    <S.Container>
      <S.Box>
        <S.Wrapper>
          <S.Title>스카우트</S.Title> <SearchInput placeholder="멤버를 찾아보세요!" />
        </S.Wrapper>
        <ScoutFilters
          selectedFilter={selectedFilter}
          handleStacksChange={handleStacksChange}
          handlePositionChange={handlePositionChange}
        />
        <ScoutCards userProfiles={searchedMemberProfiles} />
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
      </S.Box>
    </S.Container>
  );
}
