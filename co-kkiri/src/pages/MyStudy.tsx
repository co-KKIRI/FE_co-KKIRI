import { useEffect, useState } from "react";

import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

import FilterList from "@/components/commons/FilterList";
import Cards from "@/components/commons/Cards";

import { categoryStudyStatusFilter } from "@/constants/categories";
import { CategoryStudyStatus } from "@/types/categoryTypes";
import { getFilterKey } from "@/utils/objectUtils";
import Button from "@/components/commons/Button";
import ScrollToTop from "@/components/commons/FloatingButton/ScrollToTop";

//임시
import { myRecruitingList } from "@/lib/mock/myStudy/recruiting";
import { myOnGoingList } from "@/lib/mock/myStudy/onGoing";
import { myCompletedList } from "@/lib/mock/myStudy/completed";
import { PostInfo, myAppliedList } from "@/lib/mock/myStudy/applied";
import useMyStudyStore from "@/stores/myStudyStore";

export default function MyStudy() {
  const { currentCategory, setCurrentCategory } = useMyStudyStore();
  const [cards, setCards] = useState<PostInfo[]>([]);

  const handleCategoryChange = (category: string) => {
    const filterKey = getFilterKey<CategoryStudyStatus>(categoryStudyStatusFilter, category);
    setCurrentCategory(filterKey as CategoryStudyStatus);
  };

  useEffect(() => {
    // // API 요청 함수
    // const fetchCards = async () => {
    //   try {
    //     const response = await fetch(`YOUR_API_ENDPOINT?status=${currentCategory}`);
    //     const data = await response.json();
    //     setCards(data);
    //   } catch (error) {
    //     console.error("API 요청 중 오류 발생:", error);
    //   }
    // };

    // fetchCards();

    // 임시
    if (currentCategory === "APPLIED") {
      setCards(myAppliedList);
    } else if (currentCategory === "RECRUITING") {
      setCards(myRecruitingList);
    } else if (currentCategory === "ON_GOING") {
      setCards(myOnGoingList);
    } else if (currentCategory === "COMPLETED") {
      setCards(myCompletedList);
    }
  }, [currentCategory]);

  return (
    <Container>
      <Box>
        <FilterListSection
          type="category"
          currentFilter={categoryStudyStatusFilter[currentCategory]}
          filters={Object.values(categoryStudyStatusFilter)}
          onFilterClick={handleCategoryChange}
        />
        <Cards data={cards} />
        <ButtonSection variant="ghost">더보기</ButtonSection> {/*무한스크롤 로딩 시 disabled*/}
        <ScrollToTop />
      </Box>
    </Container>
  );
}

const {
  spacing,
  mediaQueries: { tablet, mobile },
} = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  display: inline-grid;
  padding-top: 2.6rem;
  padding-bottom: 12rem;
`;

const FilterListSection = styled(FilterList)`
  padding-bottom: 4rem;
  ${tablet} {
    padding-left: ${spacing.tablet};
  }

  ${mobile} {
    padding-left: ${spacing.mobile};
  }
`;

const ButtonSection = styled(Button)`
  width: 15.8rem;
  margin-top: 6rem;
  justify-self: center;

  ${mobile} {
    width: 32rem;
    margin-top: 4rem;
  }
`;
