// 스터디 상세 스터디 댓글 목록
type CommentInfo = {
  commentId: number;
  commentMemberId: number;
  commentProfileImg: string;
  commentNickname: string;
  commentCreatedAt: string;
  commentContent: string;
  isMine: boolean; //자신이 쓴 댓글인지 판단
};

type PageMeta = {
  page: number;
  take: number; // 가져올 갯수
  totalCount: number; // 전체 갯수
  pageCount: number; // 페이지 갯수
  hasPreviousPage: boolean; // 이전 페이지가 있는지
  hasNextPage: boolean; // 다음 페이지가 있는지
};

export type CommentApiRequestDto = {
  order?: "ASC" | "DESC"; // 정렬 순서, ASC: 옛날순, DESC: 최신순
  page?: number; // 요청할 페이지
  take?: number; // 몇개 가져올지
};

// 댓글 목록
export type CommentApiResponseDto = {
  comments: CommentInfo[];
  meta: PageMeta;
};

// 댓글 달기
export type CreateCommentApiRequestDto = { memberId: number; content: string };

//댓글 수정
export type ModifyCommentApiRequestDto = { content: string };
