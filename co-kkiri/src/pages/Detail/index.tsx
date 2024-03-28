import { useRef } from "react";
import * as S from "./styled";
import useComponentHeight from "@/hooks/useComponentHeight";
import ScrollToTop from "@/components/commons/FloatingButton/ScrollToTop";
import { useQuery } from "@tanstack/react-query";
import { getPostDetail } from "@/lib/api/post";
import { useParams } from "react-router-dom";
import { PostDetailApiResponseDto } from "@/lib/api/post/type";

export default function Detail() {
  const cardRef = useRef<HTMLDivElement>(null);
  const { id } = useParams();
  const postId = Number(id);
  const {
    data: detailData,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["postDetail", postId],
    queryFn: () => getPostDetail(postId),
    retry: 0,
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000,
  });

  const cardHeight = useComponentHeight<PostDetailApiResponseDto | undefined>(detailData, cardRef, 407);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
    // 에러 및 로딩 처리 통일
  }

  const { postDetails, isScraped, postApplyStatus } = detailData;

  return (
    <S.Container>
      <S.Box>
        <S.GoBackButton />
        <S.ShareAndScrapButton isScraped={isScraped} postId={postId} />
        <S.PostSection postDetails={postDetails} postApplyStatus={postApplyStatus} />
        <S.DetailCardSection cardRef={cardRef} postDetails={postDetails} />
        <S.CommentsSection postId={postId} />
        <S.ButtonSection $cardHeight={cardHeight} postApplyStatus={postApplyStatus} postId={postId} />
        <ScrollToTop />
      </S.Box>
    </S.Container>
  );
}
