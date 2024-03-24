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

export const myOnGoingList: PostInfo[] = [
  {
    id: 16,
    type: "PROJECT",
    status: "PROGRESS",
    recruitEndAt: "2024-11-01",
    isScraped: false,
    progressWay: "온라인",
    title: "인공지능 기반 음성 인식 프로젝트",
    position: ["머신러닝 엔지니어", "백엔드"],
    stack: ["Python", "TensorFlow"],
    memberNickname: "AI파이오니어",
    memberProfileImg: "profile16.jpg",
    postViews: 120,
    postCommentsNum: 18,
  },
  {
    id: 17,
    type: "STUDY",
    status: "PROGRESS",
    recruitEndAt: "2024-11-15",
    isScraped: false,
    progressWay: "혼합",
    title: "고급 자바스크립트 스터디",
    position: ["프론트엔드 개발자"],
    stack: ["JavaScript", "React"],
    memberNickname: "JS마스터",
    memberProfileImg: "profile17.jpg",
    postViews: 150,
    postCommentsNum: 25,
  },
  {
    id: 18,
    type: "PROJECT",
    status: "PROGRESS",
    recruitEndAt: "2024-12-01",
    isScraped: true,
    progressWay: "오프라인",
    title: "스마트 홈 IoT 시스템 개발",
    position: ["임베디드 개발자", "프론트엔드"],
    stack: ["C/C++", "React"],
    memberNickname: "스마트홈혁신가",
    memberProfileImg: "profile18.jpg",
    postViews: 180,
    postCommentsNum: 30,
  },
  {
    id: 19,
    type: "STUDY",
    status: "PROGRESS",
    recruitEndAt: "2024-12-15",
    isScraped: true,
    progressWay: "온라인",
    title: "데이터 분석 심화 과정",
    position: ["데이터 사이언티스트"],
    stack: ["Python", "R"],
    memberNickname: "데이터딥다이버",
    memberProfileImg: "profile19.jpg",
    postViews: 90,
    postCommentsNum: 12,
  },
  {
    id: 20,
    type: "PROJECT",
    status: "PROGRESS",
    recruitEndAt: "2025-01-01",
    isScraped: false,
    progressWay: "혼합",
    title: "가상현실 게임 개발 프로젝트",
    position: ["게임 디자이너", "프론트엔드"],
    stack: ["Unity", "C#"],
    memberNickname: "VR게임혁신",
    memberProfileImg: "profile20.jpg",
    postViews: 200,
    postCommentsNum: 35,
  },
];
