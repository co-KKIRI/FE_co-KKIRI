export interface ManageInfo {
  postId: number;
  postTitle: string; //제목
  type: "STUDY" | "PROJECT"; //스터디 종류
  recruitEndAt: string;
  progressPeriod: string;
  progressWay: string; //진행 방법 (온라인/오프라인)
  status: "READY" | "PROGRESS" | "PROGRESS_END" | "DONE"; // 스터디 진행 상태
  contactWay: string; //연락 방법
  capacity: number; //모집 인원 ==> 테이블에 추가 예정
  positions: string[]; //포지션
  stacks: string[]; //기술스택
  isLeader: boolean; // 방장인지 아닌지
}

interface ManageData {
  result: ManageInfo[];
}

export const manageData: ManageData = {
  result: [
    {
      postId: 5,
      postTitle: "블록체인 DApp 개발",
      recruitEndAt: "2024-05-01",
      progressPeriod: "2개월",
      type: "STUDY",
      progressWay: "온라인",
      status: "READY",
      contactWay: "오픈톡",
      capacity: 5,
      positions: ["백엔드", "프론트엔드"],
      stacks: ["Ethereum", "React"],
      isLeader: true,
    },
    {
      postId: 4,
      postTitle: "프로그래밍 언어 스터디",
      type: "PROJECT",
      recruitEndAt: "2024-03-10",
      progressPeriod: "2개월",
      progressWay: "오프라인",
      status: "PROGRESS",
      contactWay: "오픈톡",
      capacity: 3,
      positions: [],
      stacks: ["Java", "Python", "C++"],
      isLeader: false,
    },
    {
      postId: 3,
      postTitle: "데이터베이스 설계 프로젝트",
      type: "PROJECT",
      recruitEndAt: "2024-01-20",
      progressPeriod: "2개월",
      progressWay: "온라인",
      status: "PROGRESS_END",
      contactWay: "오픈톡",
      capacity: 7,
      positions: [],
      stacks: ["MySQL", "MongoDB"],
      isLeader: true,
    },
    {
      postId: 2,
      postTitle: "웹 개발 프로젝트",
      type: "STUDY",
      recruitEndAt: "2024-01-10",
      progressPeriod: "2개월",
      progressWay: "온라인",
      status: "DONE",
      contactWay: "오픈톡",
      capacity: 4,
      positions: ["프론트엔드", "백엔드"],
      stacks: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
      isLeader: true,
    },
    {
      postId: 1,
      postTitle: "모바일 앱 개발",
      type: "STUDY",
      recruitEndAt: "2024-05-01",
      progressPeriod: "2개월",
      progressWay: "온라인",
      status: "READY",
      contactWay: "오픈톡",
      capacity: 6,
      positions: ["안드로이드", "IOS", "백엔드"],
      stacks: ["Java", "Kotlin", "Swift"],
      isLeader: false,
    },
  ],
};
