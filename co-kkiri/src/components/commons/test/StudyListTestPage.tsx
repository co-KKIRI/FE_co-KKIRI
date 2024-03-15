import Card from "@/components/commons/Card";
import Category from "@/components/commons/Category";
import Pagination from "@/components/commons/test/Pagination";
import FilterDropdownButton from "@/components/commons/SelectDropOptions/FilterDropdownButton";
import { StudyInfo, StudyListData } from "@/lib/mock/studyList";
import DESIGN_TOKEN from "@/styles/tokens";
import { useEffect, useState } from "react";
import styled from "styled-components";
import SortSelectButton from "@/components/commons/SelectDropOptions/SortSelectButton";

function getCurrentDevice() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1024) {
    return "desktop";
  } else if (screenWidth >= 768) {
    return "tablet";
  } else {
    return "mobile";
  }
}

function getItemsPerPage() {
  const device = getCurrentDevice();
  if (device === "desktop") {
    return 12;
  } else if (device === "tablet") {
    return 8;
  } else {
    return 3;
  }
}

export default function StudyList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedProgressWay, setSelectedProgressWay] = useState("");
  const [filteredPageData, setFilteredPageData] = useState<StudyInfo[]>([]);

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

  useEffect(() => {
    function handleResize() {
      setItemsPerPage(getItemsPerPage());
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const filteredData = StudyListData.result.studyList
      .filter((data) => selectedCategory === "전체" || getTypeLabel(data.type) === selectedCategory)
      .filter((data) => !selectedPosition || data.position.includes(selectedPosition))
      .filter((data) => !selectedProgressWay || data.progressWay === selectedProgressWay);

    setFilteredPageData(filteredData);
  }, [selectedCategory, selectedPosition, selectedProgressWay]);

  return (
    <Container>
      <CategoryWrapper>
        <Category categoryType="list" onSelectCategory={handleSelectCategory} />
      </CategoryWrapper>
      <FilterBox>
        <FilterWrapper>
          <FilterDropdownButton filterType="position" onSelectFilter={handleFilterChange} />
          <FilterDropdownButton filterType="progressWay" onSelectFilter={handleFilterChange} />
        </FilterWrapper>
        <SortSelectButton />
      </FilterBox>
      <Wrapper>
        <CardList>
          {pageData.map((data) => (
            <Card key={data.id} page="studyList" cardData={data} />
          ))}
        </CardList>
      </Wrapper>
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
  justify-content: flex-start;
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
