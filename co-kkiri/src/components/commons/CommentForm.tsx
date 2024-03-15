import styled from "styled-components";
import CommentTextarea from "./Textarea/CommentTextarea";
import Button from "./Button";
import { ChangeEvent, useState } from "react";

export default function CommentForm() {
  const [newComment, setNewComment] = useState("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async () => {}; //api

  return (
    <Container>
      <CommentTextarea value={newComment} onChange={handleChange} />
      <Button variant="ghost" onClick={handleCommentSubmit} width={120} disabled={!newComment}>
        댓글 작성
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;
`;
