export interface CommentInfo {
  commentId: number;
  commentProfileImg: string;
  commentNickname: string;
  commentCreatedAt: string;
  commentContent: string;
  isMine: boolean;
}

interface CommentList {
  result: {
    comments: CommentInfo[];
  };
}

export const commentList: CommentList = {
  result: {
    comments: [
      {
        commentId: 1,
        commentProfileImg: "",
        commentNickname: "호랑이",
        commentCreatedAt: "2024-03-14 12:30:00",
        commentContent: "스터디에 참여하고 싶어요!",
        isMine: false,
      },
      {
        commentId: 2,
        commentProfileImg: "",
        commentNickname: "사자",
        commentCreatedAt: "2024-03-14 13:00:00",
        commentContent: "어떤 주제로 진행하나요?",
        isMine: false,
      },
      {
        commentId: 3,
        commentProfileImg: "",
        commentNickname: "기린",
        commentCreatedAt: "2024-03-14 13:30:00",
        commentContent: "온라인으로만 진행하나요, 혹은 오프라인도 가능한가요?",
        isMine: false,
      },
      {
        commentId: 4,
        commentProfileImg: "",
        commentNickname: "코끼리",
        commentCreatedAt: "2024-03-14 14:00:00",
        commentContent: "오프라인도 가능합니다!",
        isMine: true,
      },
      {
        commentId: 5,
        commentProfileImg: "",
        commentNickname: "기린",
        commentCreatedAt: "2024-03-14 14:30:00",
        commentContent: "스터디 인원은 어느 정도 인가요?",
        isMine: false,
      },
      {
        commentId: 6,
        commentProfileImg: "",
        commentNickname: "판다",
        commentCreatedAt: "2024-03-14 15:00:00",
        commentContent: "스터디 기간은 얼마나 되나요?",
        isMine: false,
      },
    ],
  },
};
