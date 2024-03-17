import { useEffect, useState } from "react";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import Category from "@/components/commons/Category";
import SearchInput from "@/components/commons/SearchInput";
import FilterSortOptions from "@/components/domains/studyList/Filters";
import Cards from "@/components/domains/studyList/Cards";
import Pagination from "@/components/commons/Pagination_test/Pagination";
import { getTypeLabel } from "@/utils/getTypeLabel";
import { getItemsPerPage } from "@/utils/getItemsPerPage";
// mock Data
import { StudyInfo, StudyListData } from "@/lib/mock/studyList";

export default function StudyList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedProgressWay, setSelectedProgressWay] = useState("");
  const [filteredPageData, setFilteredPageData] = useState<StudyInfo[]>([]);
  const [sortBy, setSortBy] = useState<string>("최신순");

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = filteredPageData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredPageData.length / itemsPerPage);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleFilterChange = (filterType: string, selectedValue: string) => {
    if (filterType === "position") {
      if (selectedValue === selectedPosition || selectedValue === "전체") {
        setSelectedPosition("");
      } else {
        setSelectedPosition(selectedValue);
      }
    } else if (filterType === "progressWay") {
      if (selectedValue === selectedProgressWay || selectedValue === "전체") {
        setSelectedProgressWay("");
      } else {
        setSelectedProgressWay(selectedValue);
      }
    }
    setCurrentPage(1);
  };

  const handleSort = (option: string) => {
    let sortedData;
    switch (option) {
      case "최신순":
        sortedData = filteredPageData.slice().sort((a, b) => b.id - a.id);
        break;
      case "마감순":
        sortedData = filteredPageData
          .slice()
          .sort((a, b) => new Date(a.recruitEndAt).getTime() - new Date(b.recruitEndAt).getTime());
        break;
      case "조회순":
        sortedData = filteredPageData.slice().sort((a, b) => b.postViews - a.postViews);
        break;
      default:
        sortedData = filteredPageData;
        break;
    }
    setFilteredPageData(sortedData);
    setSortBy(option);
  };

  function handleResize() {
    setItemsPerPage(getItemsPerPage());
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let filteredData = StudyListData.result.studyList.filter((data) => {
      const typeLabel = getTypeLabel(data.type);
      return selectedCategory === "전체" || typeLabel === selectedCategory;
    });

    if (selectedPosition) {
      filteredData = filteredData.filter((data) => data.position.includes(selectedPosition));
    }
    if (selectedProgressWay) {
      filteredData = filteredData.filter((data) => data.progressWay === selectedProgressWay);
    }

    setFilteredPageData(filteredData);
  }, [selectedCategory, selectedPosition, selectedProgressWay]);

  return (
    <Container>
      <CategoryWrapper>
        <Category categoryType="list" onSelectCategory={handleSelectCategory} />
        <SearchInput placeholder="제목을 검색해보세요!" />
      </CategoryWrapper>
      <FilterSortOptions handleFilterChange={handleFilterChange} handleSort={handleSort} selectedOption={sortBy} />
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
