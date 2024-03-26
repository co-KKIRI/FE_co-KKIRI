import { useEffect, useState } from "react";

import * as S from "./styled";

import Cards from "@/components/commons/Cards";
import ScrollToTop from "@/components/commons/FloatingButton/ScrollToTop";

import { categoryStudyStatusFilter } from "@/constants/categories";
import { CategoryStudyStatus } from "@/types/categoryTypes";
import { getFilterKey } from "@/utils/objectUtils";

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
    <S.Container>
      <S.Box>
        <S.Title>나의 스터디/프로젝트</S.Title>
        <S.FilterListSection
          type="category"
          currentFilter={categoryStudyStatusFilter[currentCategory]}
          filters={Object.values(categoryStudyStatusFilter)}
          onFilterClick={handleCategoryChange}
        />
        <Cards data={cards} page="myStudy" />
        <S.ButtonSection variant="ghost">더보기</S.ButtonSection> {/*무한스크롤 로딩 시 disabled*/}
        <ScrollToTop />
      </S.Box>
    </S.Container>
  );
}
