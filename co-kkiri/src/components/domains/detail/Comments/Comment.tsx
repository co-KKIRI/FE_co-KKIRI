import { useState, ChangeEvent } from "react";
import UserInfo from "@/components/commons/UserInfo";
import CommentTextarea from "@/components/domains/detail/Comments/CommentTextarea";
import * as S from "./Comment.styled";
import { createTimePassedMessage } from "@/utils/formatDate";

type CommentInfo = {
  commentId: number;
  commentProfileImg: string;
  commentNickname: string;
  commentCreatedAt: string;
  commentContent: string;
  isMine: boolean;
};

interface CommentProps {
  commentInfo: CommentInfo;
}
/**
 * 댓글 정보(작성자 정보, 작성날짜, 댓글 본문, 댓글 작성자 확인)객체를 받는 댓글창 컴포넌트
 */
export default function Comment({ commentInfo }: CommentProps) {
  const {
    commentProfileImg: profileImageUrl,
    commentNickname: nickname,
    commentCreatedAt: commentDate,
    commentContent: content,
    isMine,
  } = commentInfo;
  const commentUser = { profileImageUrl, nickname };

  const [isEditing, setIsEditing] = useState(false);
  const [contentValue, setContentValue] = useState<string>(content);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContentValue(e.target.value);
  };

  const handleEditComment = async () => {
    setIsEditing(false);
    //api
  };

  const handleDeleteComment = async () => {};

  return (
    <S.Container>
      <S.TopBox>
        <S.InfoWrapper>
          <UserInfo user={commentUser} />
          <S.ColumnDivider />
          <S.Date>{createTimePassedMessage(commentDate, true)}</S.Date>
        </S.InfoWrapper>
        {isMine &&
          (isEditing ? (
            <S.Button onClick={handleEditComment} disabled={!contentValue}>
              완료
            </S.Button>
          ) : (
            <S.ButtonWrapper>
              <S.Button onClick={() => setIsEditing(true)}>수정</S.Button>
              <S.Button onClick={handleDeleteComment}>삭제</S.Button>
            </S.ButtonWrapper>
          ))}
      </S.TopBox>
      {isEditing ? <CommentTextarea value={contentValue} onChange={handleChange} /> : <S.Text>{content}</S.Text>}
      <S.HorizontalDivider />
    </S.Container>
  );
}
