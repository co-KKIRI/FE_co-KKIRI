import { CategoryList } from "@/types/categoryTypes";

type PostInfo = {
  id: number;
  type: CategoryList;
  status: "READY" | "PROGRESS" | "PROGRESS_END" | "DONE";
  recruitEndAt: string;
  isScraped: boolean;
  progressWay: string;
  title: string;
  positions: string[];
  stacks: string[];
  memberNickname: string;
  memberProfileImg: string;
  viewCount: number;
  commentCount: number;
};

export const myCompletedList: PostInfo[] = [
  {
    id: 21,
    type: "PROJECT",
    status: "PROGRESS_END",
    recruitEndAt: "2024-11-01",
    isScraped: true,
    progressWay: "온라인",
    title: "심화 머신러닝 스터디",
    positions: ["데이터 사이언티스트", "머신러닝 엔지니어"],
    stacks: ["Python", "TensorFlow"],
    memberNickname: "데이터드리머",
    memberProfileImg: "profile21.jpg",
    viewCount: 250,
    commentCount: 40,
  },
  {
    id: 22,
    type: "PROJECT",
    status: "PROGRESS_END",
    recruitEndAt: "2025-01-05",
    isScraped: false,
    progressWay: "오프라인",
    title: "지역 사회를 위한 모바일 앱 개발",
    positions: ["안드로이드 개발자", "UI/UX 디자이너"],
    stacks: ["Kotlin", "Adobe XD"],
    memberNickname: "커뮤니티헬퍼",
    memberProfileImg: "profile22.jpg",
    viewCount: 210,
    commentCount: 30,
  },
  {
    id: 23,
    type: "STUDY",
    status: "DONE",
    recruitEndAt: "2025-01-15",
    isScraped: true,
    progressWay: "혼합",
    title: "최신 웹 기술 스터디",
    positions: ["프론트엔드 개발자", "백엔드 개발자"],
    stacks: ["React", "Node.js"],
    memberNickname: "웹혁신가",
    memberProfileImg: "profile23.jpg",
    viewCount: 180,
    commentCount: 25,
  },
  {
    id: 24,
    type: "PROJECT",
    status: "DONE",
    recruitEndAt: "2025-02-01",
    isScraped: false,
    progressWay: "온라인",
    title: "재활용을 돕는 스마트 시스템 개발",
    positions: ["풀스택 개발자", "데이터 사이언티스트"],
    stacks: ["Vue.js", "Python"],
    memberNickname: "에코테크놀로지",
    memberProfileImg: "profile24.jpg",
    viewCount: 320,
    commentCount: 45,
  },
  {
    id: 25,
    type: "STUDY",
    status: "DONE",
    recruitEndAt: "2025-02-20",
    isScraped: true,
    progressWay: "오프라인",
    title: "고급 알고리즘 문제 해결",
    positions: ["학생", "소프트웨어 엔지니어"],
    stacks: ["C++", "Java"],
    memberNickname: "알고리즘마스터",
    memberProfileImg: "profile25.jpg",
    viewCount: 290,
    commentCount: 50,
  },
];
