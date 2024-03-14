import { useState } from "react";
import UserInfo from "../UserInfo";
import CommentInput from "./CommentInput";
import * as S from "./Comment.styled";

const userId = 10; // 현재 로그인 되어있는 유저 아이디 임시

type CommentInfo = {
  commentId: number;
  commentProfileImg: string;
  commentNickname: string;
  commentCreatedAt: string;
  commentContent: string;
};

interface CommentProps {
  commentInfo: CommentInfo;
}
/**
 * 댓글 정보(작성자 정보, 작성날짜, 댓글 본문)객체를 받는 댓글창 컴포넌트
 */
export default function Comment({ commentInfo }: CommentProps) {
  const {
    commentId,
    commentProfileImg: profileImage,
    commentNickname: nickname,
    commentCreatedAt: commentDate,
    commentContent: content,
  } = commentInfo;
  const commentUser = { profileImage, nickname };

  const [isEditing, setIsEditing] = useState(false);
  const [contentValue, setContentValue] = useState<string>(content);
  const isUserComment = commentId === userId;

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
        {isUserComment &&
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
      {isEditing ? (
        <CommentInput placeholder="댓글을 입력하세요." value={contentValue} setValue={setContentValue} />
      ) : (
        <S.Text>{content}</S.Text>
      )}
      <S.HorizontalDivider />
    </S.Container>
  );
}
