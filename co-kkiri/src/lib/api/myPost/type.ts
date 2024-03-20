type AppliedPost = {
  appliedPostId: number;
  title: string;
};

// 나의 스터디 내가 신청한 스터디 목록
export type AppliedListApiResponseDto = {
  appliedPostList: AppliedPost[];
};

type RecruitedPost = {
  postId: number;
  title: string;
  //status: string; // 필요한지 논의 필요
  //recruitEndAt: string;
};

// 나의 스터디 내가 모집한 스터디 목록
export type RecruitedListApiResponseDto = {
  recruitedPostList: RecruitedPost[];
};

type OnGoingPost = {
  postId: number;
  title: string;
};

// 나의 스터디 내가 진행중인 스터디 목록
export type OnGoingListApiResponseDto = {
  onGoingPostList: OnGoingPost[];
};

type CompletedPost = {
  postId: number;
  title: string;
};

// 나의 스터디 내가 완료한 스터디 목록
export type CompletedListApiResponseDto = {
  completedPostList: CompletedPost[];
};

// 진행중인 스터디 완료

// 피어리뷰 작성

// 피어리뷰 보기

//api 나오는 대로 작성 예정
