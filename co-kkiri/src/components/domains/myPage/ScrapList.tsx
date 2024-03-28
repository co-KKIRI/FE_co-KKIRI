import * as S from "./ScrapList.styled";
import SectionTitle from "../manage/SectionTitle";
import Card from "@/components/commons/Card";
import Button from "@/components/commons/Button";
import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { getScrapList } from "@/lib/api/myPage";

export default function ScrapList() {
  const PAGE_LIMIT = 9;

  const { data, error, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["/my-page/scrap/list"],
    queryFn: ({ pageParam = 1 }) => getScrapList({ page: pageParam, take: PAGE_LIMIT }),
    initialPageParam: 1,
    getNextPageParam: (prevPage, pages) => {
      if (prevPage.meta.hasNextPage) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
    placeholderData: keepPreviousData,
  });

  const count = data?.pages[0].meta.totalCount;

  if (error) {
    console.error(error);
  }

  return (
    <S.Container>
      <SectionTitle title="스터디/프로젝트 스크랩 목록" count={count} type="cardList" />
      <S.Box>
        <S.Wrapper>
          {data?.pages.map((page) =>
            page.data.map(
              (scrap) =>
                scrap.isScraped && (
                  <div key={scrap.postId}>
                    <Card page="studyList" cardData={scrap} />
                  </div>
                ),
            ),
          )}
        </S.Wrapper>
        {count === 0 && <S.NoResultText>스크랩 목록이 없어요.</S.NoResultText>}
        <Button
          variant="ghost"
          width={158}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}>
          더보기
        </Button>
      </S.Box>
    </S.Container>
  );
}
