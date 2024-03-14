import { useState } from "react";
import UserInfo from "../UserInfo";
import CommentTextarea from "../Textarea/CommentTextarea";
import * as S from "./Comment.styled";

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
    commentProfileImg: profileImage,
    commentNickname: nickname,
    commentCreatedAt: commentDate,
    commentContent: content,
    isMine,
  } = commentInfo;
  const commentUser = { profileImage, nickname };

  const [isEditing, setIsEditing] = useState(false);
  const [contentValue, setContentValue] = useState<string>(content);

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
          <S.Date>{commentDate}</S.Date>
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
      {isEditing ? <CommentTextarea value={contentValue} setValue={setContentValue} /> : <S.Text>{content}</S.Text>}
      <S.HorizontalDivider />
    </S.Container>
  );
}
