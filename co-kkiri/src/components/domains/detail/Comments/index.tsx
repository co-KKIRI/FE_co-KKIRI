import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import Button from "@/components/commons/Button";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getCommentList } from "@/lib/api/comment";

interface CommentsProps {
  postId: number;
  className?: string;
}

export default function Comments({ postId, className }: CommentsProps) {
  const {
    data: commentsData,
    isSuccess,
    isError,
    isPending,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["comments", postId],
    queryFn: ({ pageParam }) => getCommentList(postId, { order: "DESC", page: pageParam, take: 10 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) =>
      lastPage.meta.hasNextPage ? lastPageParam + 1 : undefined,
    retry: 0,
    refetchOnWindowFocus: false,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
    // 에러 및 로딩 처리 통일
  }

  const commentsPages = commentsData?.pages ?? [];
  const totalCount = isSuccess ? commentsData.pages[0].meta.totalCount : 0;

  return (
    <Container className={className}>
      <Wrapper>
        <Label>댓글</Label>
        <Count>{totalCount}</Count>
      </Wrapper>
      <CommentForm />
      <CommentWrapper>
        {commentsPages.map((commentPage) =>
          commentPage.data.map((comment) => <Comment key={comment.commentId} commentInfo={comment} postId={postId} />),
        )}
      </CommentWrapper>
      {hasNextPage && (
        <LoadMoreButton variant="ghost" onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          더보기
        </LoadMoreButton>
      )}
    </Container>
  );
}

const {
  color,
  mediaQueries: { mobile },
} = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 50rem;
  margin-bottom: 12rem;

  ${mobile} {
    width: 32rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Label = styled.div`
  color: ${color.black[1]};
  font-size: 2rem;
  line-height: 150%;
  font-weight: 600;
`;

const Count = styled(Label)`
  color: ${color.primary[1]};
`;

const CommentWrapper = styled.div`
  margin-top: 2rem;
`;

const LoadMoreButton = styled(Button)`
  margin-top: -1rem;
`;
