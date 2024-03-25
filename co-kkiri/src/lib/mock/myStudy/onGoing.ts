import { CategoryList } from "@/types/categoryTypes";

type PostInfo = {
  id: number;
  type: CategoryList;
  status: "READY" | "PROGRESS" | "PROGRESS_END" | "DONE";
  recruitEndAt: string;
  isScrapped: boolean;
  progressWay: string;
  title: string;
  positions: string[];
  stacks: string[];
  memberNickname: string;
  memberProfileImg: string;
  viewCount: number;
  commentCount: number;
};

export const myOnGoingList: PostInfo[] = [
  {
    id: 16,
    type: "PROJECT",
    status: "PROGRESS",
    recruitEndAt: "2024-11-01",
    isScrapped: false,
    progressWay: "온라인",
    title: "인공지능 기반 음성 인식 프로젝트",
    positions: ["머신러닝 엔지니어", "백엔드"],
    stacks: ["Python", "TensorFlow"],
    memberNickname: "AI파이오니어",
    memberProfileImg: "profile16.jpg",
    viewCount: 120,
    commentCount: 18,
  },
  {
    id: 17,
    type: "STUDY",
    status: "PROGRESS",
    recruitEndAt: "2024-11-15",
    isScrapped: false,
    progressWay: "혼합",
    title: "고급 자바스크립트 스터디",
    positions: ["프론트엔드 개발자"],
    stacks: ["JavaScript", "React"],
    memberNickname: "JS마스터",
    memberProfileImg: "profile17.jpg",
    viewCount: 150,
    commentCount: 25,
  },
  {
    id: 18,
    type: "PROJECT",
    status: "PROGRESS",
    recruitEndAt: "2024-12-01",
    isScrapped: true,
    progressWay: "오프라인",
    title: "스마트 홈 IoT 시스템 개발",
    positions: ["임베디드 개발자", "프론트엔드"],
    stacks: ["C/C++", "React"],
    memberNickname: "스마트홈혁신가",
    memberProfileImg: "profile18.jpg",
    viewCount: 180,
    commentCount: 30,
  },
  {
    id: 19,
    type: "STUDY",
    status: "PROGRESS",
    recruitEndAt: "2024-12-15",
    isScrapped: true,
    progressWay: "온라인",
    title: "데이터 분석 심화 과정",
    positions: ["데이터 사이언티스트"],
    stacks: ["Python", "R"],
    memberNickname: "데이터딥다이버",
    memberProfileImg: "profile19.jpg",
    viewCount: 90,
    commentCount: 12,
  },
  {
    id: 20,
    type: "PROJECT",
    status: "PROGRESS",
    recruitEndAt: "2025-01-01",
    isScrapped: false,
    progressWay: "혼합",
    title: "가상현실 게임 개발 프로젝트",
    positions: ["게임 디자이너", "프론트엔드"],
    stacks: ["Unity", "C#"],
    memberNickname: "VR게임혁신",
    memberProfileImg: "profile20.jpg",
    viewCount: 200,
    commentCount: 35,
  },
];
