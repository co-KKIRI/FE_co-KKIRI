import { useEffect, useState } from "react";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import FilterList from "@/components/commons/FilterList";
import SearchInput from "@/components/commons/SearchInput";
import Filters from "@/components/domains/studyList/Filters";
import Cards from "@/components/domains/studyList/Cards";
import Pagination from "@/components/commons/Pagination_test/Pagination";
import { DROPDOWN_INFO } from "@/constants/dropDown";
import { CategoryListFilter, categoryListFilter } from "@/constants/categories";
import { CategoryList } from "@/types/categoryTypes";
import { getItemsPerPage } from "@/utils/getItemsPerPage";
import { getFilterKey } from "@/utils/ObjectUtils";
// mock Data
import { StudyInfo, StudyListData } from "@/lib/mock/studyList";

export default function StudyList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  const [category, setCategory] = useState<CategoryListFilter>("ALL");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedProgressWay, setSelectedProgressWay] = useState("");
  const [filteredPageData, setFilteredPageData] = useState<StudyInfo[]>([]);

  const { sort, filter } = DROPDOWN_INFO;

  // reactQuery 없이 구현된 코드
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = filteredPageData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredPageData.length / itemsPerPage);

  const handleCategoryChange = (category: string) => {
    const filterKey = getFilterKey<CategoryList>(categoryListFilter, category);
    setCategory(filterKey as CategoryListFilter);
  };

  // API 요청 없이 구현된 코드
  const handleFilterChange = (option: string, selectedValue: string) => {
    if (option === "position") {
      setSelectedPosition(selectedValue === filter.position.options[0] ? "" : selectedValue);
    } else if (option === "progressWay") {
      setSelectedProgressWay(selectedValue === filter.progressWay.options[0] ? "" : selectedValue);
    }
  };

  // API 요청 없이 구현된 코드
  const handleSortChange = (option: string) => {
    let sortedData: StudyInfo[];
    switch (option) {
      case sort.options[0]:
        sortedData = filteredPageData.slice().sort((a, b) => b.id - a.id);
        break;
      case sort.options[1]:
        sortedData = filteredPageData
          .slice()
          .sort((a, b) => new Date(a.recruitEndAt).getTime() - new Date(b.recruitEndAt).getTime());
        break;
      case sort.options[2]:
        sortedData = filteredPageData.slice().sort((a, b) => b.postViews - a.postViews);
        break;
      default:
        sortedData = filteredPageData;
        break;
    }
    setFilteredPageData(sortedData);
    setCurrentPage(1);
  };

  const handleResize = () => {
    setItemsPerPage(getItemsPerPage());
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const filteredData = StudyListData.result.studyList.filter((data) => {
      const categoryFilter = category === "ALL" || data.type === category;
      const positionFilter = !selectedPosition || data.position.includes(selectedPosition);
      const progressWayFilter = !selectedProgressWay || data.progressWay === selectedProgressWay;

      return categoryFilter && positionFilter && progressWayFilter;
    });
    setFilteredPageData(filteredData);
    setCurrentPage(1);
  }, [category, selectedPosition, selectedProgressWay]);

  return (
    <Container>
      <CategoryWrapper>
        <FilterList
          type="category"
          currentFilter={categoryListFilter[category]}
          filters={Object.values(categoryListFilter)}
          onFilterClick={handleCategoryChange}
        />
        <SearchInput placeholder="제목을 검색해보세요!" />
      </CategoryWrapper>
      <Filters handleFilterChange={handleFilterChange} handleSortChange={handleSortChange} />
      <Cards data={pageData} />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
    </Container>
  );
}

const { mediaQueries } = DESIGN_TOKEN;

const Container = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
  }
`;
