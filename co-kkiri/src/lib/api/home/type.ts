//홈 페이지 카드 리스트
export type MainPostInfo = {
  postId: number;
  type: "STUDY" | "PROJECT";
  recruitEndAt: string;
  status: "READY" | "PROGRESS" | "PROGRESS_END" | "DONE"; //ready 상태만 옴
  isScraped: boolean;
  progressWay: string; // 온라인/오프라인
  title: string;
  position: string[]; //  ex) ["FRONTEND","BACKEND","DESIGNER"]
  stack: string[]; // ex) ["REACT", "JAVASCRIPT", "KOTLIN", "C#"]
  memberNickname: string;
  memberProfileImg: string;
  postViews: number;
  postCommentsNum: number;
};

export type HomeApiResponseDto = {
  newStudyList: MainPostInfo[]; //4개씩 표시
  hotStudyList: MainPostInfo[];
  newProjectList: MainPostInfo[];
  hotProjectList: MainPostInfo[];
};
