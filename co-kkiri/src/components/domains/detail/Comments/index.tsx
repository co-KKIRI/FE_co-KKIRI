import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import Button from "@/components/commons/Button";
import { useQuery } from "@tanstack/react-query";
import { getCommentList } from "@/lib/api/comment";

interface CommentsProps {
  postId: number;
  className?: string;
}

export default function Comments({ postId, className }: CommentsProps) {
  const {
    data: commentsData,
    isError,
    isPending,
    error,
  } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => getCommentList(postId, { order: "DESC", page: 1, take: 10 }),
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return console.error(error.message);
    // 에러 및 로딩 처리 통일
  }

  const {
    data: comments,
    meta: { totalCount },
  } = commentsData;

  return (
    <Container className={className}>
      <Wrapper>
        <Label>댓글</Label>
        <Count>{totalCount}</Count>
      </Wrapper>
      <CommentForm />
      <CommentWrapper>
        {comments?.map((commentInfo) => (
          <Comment key={commentInfo.commentId} commentInfo={commentInfo} postId={postId} />
        ))}
      </CommentWrapper>
      {comments.length > 10 && <LoadMoreButton variant="ghost">더보기</LoadMoreButton>}
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
