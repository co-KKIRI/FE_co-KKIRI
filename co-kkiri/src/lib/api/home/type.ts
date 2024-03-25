//홈 페이지 카드 리스트
export type MainPostInfo = {
  postId: number;
  type: CategoryList;
  recruitEndAt: string;
  status: "READY" | "PROGRESS" | "PROGRESS_END" | "DONE"; //ready 상태만 옴
  isScrapped: boolean;
  progressWay: string; // 온라인/오프라인
  title: string;
  positions: string[]; //  ex) ["FRONTEND","BACKEND","DESIGNER"]
  stacks: string[]; // ex) ["REACT", "JAVASCRIPT", "KOTLIN", "C#"]
  memberNickname: string;
  memberProfileImg: string;
  viewCount: number;
  commentCount: number;
};

export type HomeApiResponseDto = {
  newStudyList: MainPostInfo[]; //4개씩 표시
  hotStudyList: MainPostInfo[];
  newProjectList: MainPostInfo[];
  hotProjectList: MainPostInfo[];
};
