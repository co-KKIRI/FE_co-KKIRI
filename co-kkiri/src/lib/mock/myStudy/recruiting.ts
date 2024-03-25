type PostInfo = {
  id: number;
  type: "STUDY" | "PROJECT";
  status: "READY" | "PROGRESS" | "PROGRESS_END" | "DONE";
  recruitEndAt: string;
  isScraped: boolean;
  progressWay: string;
  title: string;
  position: string[];
  stack: string[];
  memberNickname: string;
  memberProfileImg: string;
  postViews: number;
  postCommentsNum: number;
};

export const myRecruitingList: PostInfo[] = [
  {
    id: 11,
    type: "STUDY",
    status: "READY",
    recruitEndAt: "2024-09-01",
    isScraped: false,
    progressWay: "온라인",
    title: "풀스택 개발자 되기",
    position: ["프론트엔드", "백엔드"],
    stack: ["React", "Node.js"],
    memberNickname: "풀스택챌린저",
    memberProfileImg: "profile11.jpg",
    postViews: 110,
    postCommentsNum: 11,
  },
  {
    id: 12,
    type: "PROJECT",
    status: "READY",
    recruitEndAt: "2024-09-15",
    isScraped: true,
    progressWay: "오프라인",
    title: "사회적 문제 해결을 위한 앱 개발",
    position: ["UI/UX 디자이너", "프론트엔드"],
    stack: ["Flutter", "Adobe XD"],
    memberNickname: "소셜이노베이터",
    memberProfileImg: "profile12.jpg",
    postViews: 185,
    postCommentsNum: 22,
  },
  {
    id: 13,
    type: "STUDY",
    status: "READY",
    recruitEndAt: "2024-09-30",
    isScraped: false,
    progressWay: "혼합",
    title: "컴퓨터 과학 깊게 이해하기",
    position: ["학생", "개발자"],
    stack: ["C++", "Python"],
    memberNickname: "CS마스터",
    memberProfileImg: "profile13.jpg",
    postViews: 95,
    postCommentsNum: 8,
  },
  {
    id: 14,
    type: "PROJECT",
    status: "READY",
    recruitEndAt: "2024-10-10",
    isScraped: true,
    progressWay: "온라인",
    title: "지속 가능한 환경을 위한 기술 개발",
    position: ["백엔드", "데이터 사이언티스트"],
    stack: ["Node.js", "MongoDB"],
    memberNickname: "에코테크",
    memberProfileImg: "profile14.jpg",
    postViews: 210,
    postCommentsNum: 34,
  },
  {
    id: 15,
    type: "STUDY",
    status: "READY",
    recruitEndAt: "2024-10-25",
    isScraped: false,
    progressWay: "오프라인",
    title: "알고리즘 마스터하기",
    position: ["학생", "개발자"],
    stack: ["Python", "Java"],
    memberNickname: "알고리즘짱",
    memberProfileImg: "profile15.jpg",
    postViews: 130,
    postCommentsNum: 14,
  },
];
