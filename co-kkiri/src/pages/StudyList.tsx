import Card from "@/components/commons/Card";
import Category from "@/components/commons/Category";
import Pagination from "@/components/commons/Pagination_test/Pagination";
import FilterDropdownButton from "@/components/commons/SelectDropOptions/FilterDropdownButton";
import { StudyInfo, StudyListData } from "@/lib/mock/studyList";
import DESIGN_TOKEN from "@/styles/tokens";
import { useEffect, useState } from "react";
import styled from "styled-components";
import SortSelectButton from "@/components/commons/SelectDropOptions/SortSelectButton";
import SearchInput from "@/components/commons/SearchInput";

function getItemsPerPage() {
  const screenWidth = window.innerWidth;
  let itemsPerPage;

  if (screenWidth >= 1024) {
    itemsPerPage = 12;
  } else if (screenWidth >= 768) {
    itemsPerPage = 8;
  } else {
    itemsPerPage = 3;
  }

  return itemsPerPage;
}

export default function StudyList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedProgressWay, setSelectedProgressWay] = useState("");
  const [filteredPageData, setFilteredPageData] = useState<StudyInfo[]>([]);
  // const [sortBy, setSortBy] = useState<string>("최신순");
  // const [searchQuery, setSearchQuery] = useState("");

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = filteredPageData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredPageData.length / itemsPerPage);

  const getTypeLabel = (type: "STUDY" | "PROJECT") => {
    switch (type) {
      case "STUDY":
        return "스터디";
      case "PROJECT":
        return "프로젝트";
    }
  };

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

  // const handleSearch = (query: string) => {
  //   setSearchQuery(query.trim());
  // };

  // const handleSort = (option: string) => {
  //   let sortedData;
  //   switch (option) {
  //     case "최신순":
  //       sortedData = filteredPageData.slice().sort((a, b) => b.id - a.id);
  //       break;
  //     case "마감순":
  //       sortedData = filteredPageData
  //         .slice()
  //         .sort((a, b) => new Date(a.recruitEndAt).getTime() - new Date(b.recruitEndAt).getTime());
  //       break;
  //     case "조회순":
  //       sortedData = filteredPageData.slice().sort((a, b) => b.postViews - a.postViews);
  //       break;
  //     default:
  //       sortedData = filteredPageData.slice().sort((a, b) => b.id - a.id);
  //       break;
  //   }
  //   setFilteredPageData(sortedData);
  //   setSortBy(option);
  // };

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
      return (
        // (selectedCategory === "전체" || typeLabel === selectedCategory) &&
        // (searchQuery === "" || data.title.includes(searchQuery.toLowerCase()))
        selectedCategory === "전체" || typeLabel === selectedCategory
      );
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
        <SearchInput placeholder="찾고싶은 스터디/프로젝트 제목을 입력하세요!" />
      </CategoryWrapper>
      <FilterBox>
        <FilterWrapper>
          <FilterDropdownButton filterType="position" onSelectFilter={handleFilterChange} />
          <FilterDropdownButton filterType="progressWay" onSelectFilter={handleFilterChange} />
        </FilterWrapper>
        <SortSelectButton />
      </FilterBox>
      <Wrapper>
        {pageData.length === 0 ? (
          <NoResultText>검색 결과가 없습니다.</NoResultText>
        ) : (
          <CardList>
            {pageData.map((data) => (
              <Card key={data.id} page="studyList" cardData={data} />
            ))}
          </CardList>
        )}
      </Wrapper>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
    </Container>
  );
}

const { mediaQueries, color } = DESIGN_TOKEN;

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
`;

const FilterBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FilterWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const CardList = styled.div`
  display: grid;
  flex-wrap: wrap;
  gap: 2rem;
  ${mediaQueries.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${mediaQueries.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQueries.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const NoResultText = styled.p`
  font-size: 1.2rem;
  color: ${color.black};
  text-align: center;
  margin-top: 2rem;
`;
