import { CategoryList } from "@/types/categoryTypes";

type PostInfo = {
  postId: number;
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

export const myRecruitingList: PostInfo[] = [
  {
    postId: 11,
    type: "STUDY",
    status: "READY",
    recruitEndAt: "2024-09-01",
    isScraped: false,
    progressWay: "온라인",
    title: "풀스택 개발자 되기",
    positions: ["프론트엔드", "백엔드"],
    stacks: ["React", "Node.js"],
    memberNickname: "풀스택챌린저",
    memberProfileImg: "profile11.jpg",
    viewCount: 110,
    commentCount: 11,
  },
  {
    postId: 12,
    type: "PROJECT",
    status: "READY",
    recruitEndAt: "2024-09-15",
    isScraped: true,
    progressWay: "오프라인",
    title: "사회적 문제 해결을 위한 앱 개발",
    positions: ["UI/UX 디자이너", "프론트엔드"],
    stacks: ["Flutter", "Adobe XD"],
    memberNickname: "소셜이노베이터",
    memberProfileImg: "profile12.jpg",
    viewCount: 185,
    commentCount: 22,
  },
  {
    postId: 13,
    type: "STUDY",
    status: "READY",
    recruitEndAt: "2024-09-30",
    isScraped: false,
    progressWay: "혼합",
    title: "컴퓨터 과학 깊게 이해하기",
    positions: ["학생", "개발자"],
    stacks: ["C++", "Python"],
    memberNickname: "CS마스터",
    memberProfileImg: "profile13.jpg",
    viewCount: 95,
    commentCount: 8,
  },
  {
    postId: 14,
    type: "PROJECT",
    status: "READY",
    recruitEndAt: "2024-10-10",
    isScraped: true,
    progressWay: "온라인",
    title: "지속 가능한 환경을 위한 기술 개발",
    positions: ["백엔드", "데이터 사이언티스트"],
    stacks: ["Node.js", "MongoDB"],
    memberNickname: "에코테크",
    memberProfileImg: "profile14.jpg",
    viewCount: 210,
    commentCount: 34,
  },
  {
    postId: 15,
    type: "STUDY",
    status: "READY",
    recruitEndAt: "2024-10-25",
    isScraped: false,
    progressWay: "오프라인",
    title: "알고리즘 마스터하기",
    positions: ["학생", "개발자"],
    stacks: ["Python", "Java"],
    memberNickname: "알고리즘짱",
    memberProfileImg: "profile15.jpg",
    viewCount: 130,
    commentCount: 14,
  },
];
