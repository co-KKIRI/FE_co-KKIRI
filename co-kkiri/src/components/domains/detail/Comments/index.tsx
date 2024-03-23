import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { commentList, CommentInfo } from "@/lib/mock/commentList";
import Button from "@/components/commons/Button";

interface CommentsProps {
  commentsNum: number;
  className?: string;
}

export default function Comments({ commentsNum, className }: CommentsProps) {
  const comments: CommentInfo[] = commentList.result.comments;
  return (
    <Container className={className}>
      <Wrapper>
        <Label>댓글</Label>
        <Count>{commentsNum}</Count>
      </Wrapper>
      <CommentForm />
      <CommentWrapper>
        {comments?.map((commentInfo) => <Comment key={commentInfo.commentId} commentInfo={commentInfo} />)}
      </CommentWrapper>
      {comments.length > 10 && <LoadMoreButton variant="ghost">더보기</LoadMoreButton>}
    </Container>
  );
}

const {
  color,
  mediaQueries: { tablet, mobile },
} = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 50rem;

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
  margin-bottom: 12rem;
`;
