import { useEffect, useState } from "react";
import * as S from "./styled";
import FilterList from "@/components/commons/FilterList";
import SearchInput from "@/components/commons/SearchInput";
import Filters from "@/components/domains/studyList/Filters";
import Cards from "@/components/commons/Cards";
import Pagination from "@/components/commons/Pagination";
import CreatePost from "@/components/commons/FloatingButton/CreatePost";
import { CategoryListFilter, categoryListFilter } from "@/constants/categories";
import { CategoryList } from "@/types/categoryTypes";
import { getFilterKey } from "@/utils/objectUtils";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPostList } from "@/lib/api/post";
import useStudyListStore from "@/stores/studyListStore";

export default function StudyList() {
  const { currentCategory, setCurrentCategory } = useStudyListStore();
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading } = useQuery({
    queryKey: ["/post/list", { meetingType: currentCategory, page: currentPage, take: 12 }],
    queryFn: () => getPostList({ meetingType: currentCategory, page: currentPage, take: 12 }),
    placeholderData: keepPreviousData,
  });

  if (error) {
    console.error(error);
  }

  // 임시
  if (isLoading) {
    <div>Loading...</div>;
  }

  const handleCategoryChange = (category: string) => {
    const filterKey = getFilterKey<CategoryList>(categoryListFilter, category);
    const newCategory = filterKey as CategoryListFilter;
    setCurrentCategory(newCategory);
  };

  const totalPage = data?.meta.pageCount || NaN;

  useEffect(() => {
    setCurrentPage(1);
  }, [currentCategory]);

  return (
    <S.Container>
      <S.Box>
        <S.CategoryWrapper>
          <FilterList
            type="category"
            currentFilter={categoryListFilter[currentCategory]}
            filters={Object.values(categoryListFilter)}
            onFilterClick={handleCategoryChange}
          />
          <SearchInput placeholder="제목을 검색해보세요!" />
        </S.CategoryWrapper>
        {/* <Filters handleFilterChange={handleFilterChange} handleSortChange={handleSortChange} /> */}
        {data && <Cards data={data.data} page="studyList" />}
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPage} />
      </S.Box>
      <CreatePost />
    </S.Container>
  );
}
