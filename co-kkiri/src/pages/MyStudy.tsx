import { useEffect, useState } from "react";
import FilterList from "@/components/commons/FilterList";
import { categoryStudyStatusFilter } from "@/constants/categories";
import { CategoryStudyStatus } from "@/types/categoryTypes";
import { getFilterKey } from "@/utils/objectUtils";

export default function MyStudy() {
  const [currentCategory, setCurrentCategory] = useState<CategoryStudyStatus>("APPLIED");
  const [cards, setCards] = useState([]); // type 넣기

  const handleCategoryChange = (category: string) => {
    const filterKey = getFilterKey<CategoryStudyStatus>(categoryStudyStatusFilter, category);
    setCurrentCategory(filterKey as CategoryStudyStatus);
  };

  useEffect(() => {
    // API 요청 함수
    const fetchCards = async () => {
      try {
        const response = await fetch(`YOUR_API_ENDPOINT?status=${currentCategory}`);
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
      }
    };

    fetchCards();
  }, [currentCategory]);

  return (
    <>
      <FilterList
        type="category"
        currentFilter={categoryStudyStatusFilter[currentCategory]}
        filters={Object.values(categoryStudyStatusFilter)}
        onFilterClick={handleCategoryChange}
      />
    </>
  );
}
