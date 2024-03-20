// 스터디 상세 스터디 댓글 목록
type CommentInfo = {
  commentId: number;
  commentProfileImg: string;
  commentNickname: string;
  commentCreatedAt: string;
  commentContent: string;
  isMine: boolean; //자신이 쓴 댓글인지 판단
};

// 댓글 목록
export type CommentApiResponseDto = {
  comments: CommentInfo[];
};

// 댓글 달기
export type CreateCommentApiRequestDto = { memberId: number; content: string };

//댓글 수정
export type ModifyCommentApiRequestDto = { content: string };
