import { MyScrapApiResponseDto } from "@/lib/api/myPage/type";

interface MyScrapList {
  result: MyScrapApiResponseDto;
}

export const myScrapList: MyScrapList = {
  result: {
    scrapList: [
      {
        postId: 34,
        type: "PROJECT",
        recruitEndAt: "2025-12-01",

        isScraped: false,
        progressWay: "오프라인",
        title: "빅데이터 기반 스마트 시티 구축",
        positions: ["프론트엔드", "안드로이드", "디자이너", "개발자"],
        stacks: ["Python", "Django", "Vue.js"],
        memberNickname: "빅데이터스마트시티G안녕하세요오긴글테스트",
        memberProfileImg: "",
        viewCount: 1350,
        commentCount: 155,
      },
      {
        postId: 33,
        type: "PROJECT",
        recruitEndAt: "2025-11-15",

        isScraped: true,
        progressWay: "온라인",
        title: "스마트 홈 네트워크 시스템",
        positions: ["개발자", "안드로이드", "프론트엔드", "디자이너", "백엔드", "IOS"],
        stacks: ["Node.js", "Express", "MongoDB", "HTML", "CSS", "JavaScript", "Python", "R", "SQL"],
        memberNickname: "스마트홈네트워크G",
        memberProfileImg: "",
        viewCount: 1300,
        commentCount: 150,
      },
      {
        postId: 32,
        type: "PROJECT",
        recruitEndAt: "2025-10-01",

        isScraped: false,
        progressWay: "오프라인",
        title: "데이터 기반 인공지능 트레이딩 시스템",
        positions: ["백엔드"],
        stacks: [],
        memberNickname: "AI트레이딩G",
        memberProfileImg: "",
        viewCount: 1250,
        commentCount: 145,
      },
      {
        postId: 31,
        type: "PROJECT",
        recruitEndAt: "2025-09-15",

        isScraped: true,
        progressWay: "온라인",
        title: "자연어 처리 기반 챗봇 시스템",
        positions: ["백엔드"],
        stacks: ["Python", "TensorFlow", "NLTK"],
        memberNickname: "챗봇G",
        memberProfileImg: "",
        viewCount: 1200,
        commentCount: 140,
      },
      {
        postId: 30,
        type: "PROJECT",
        recruitEndAt: "2025-08-01",

        isScraped: false,
        progressWay: "오프라인",
        title: "얼굴 인식 기반 출석 관리 시스템",
        positions: ["백엔드"],
        stacks: ["Python", "OpenCV", "Django"],
        memberNickname: "출석G",
        memberProfileImg: "",
        viewCount: 1150,
        commentCount: 135,
      },
      {
        postId: 29,
        type: "PROJECT",
        recruitEndAt: "2025-07-15",

        isScraped: true,
        progressWay: "온라인",
        title: "인공지능 기반 스피치 인식 프로젝트",
        positions: ["백엔드"],
        stacks: ["Python", "TensorFlow", "SpeechRecognition"],
        memberNickname: "스피치G",
        memberProfileImg: "",
        viewCount: 1100,
        commentCount: 130,
      },
      {
        postId: 28,
        type: "PROJECT",
        recruitEndAt: "2025-06-01",

        isScraped: false,
        progressWay: "오프라인",
        title: "로봇 시각 인식 시스템 개발",
        positions: ["프론트엔드", "백엔드", "디자이너"],
        stacks: ["Python", "OpenCV", "ROS"],
        memberNickname: "로봇G",
        memberProfileImg: "",
        viewCount: 1050,
        commentCount: 125,
      },
    ],
  },
};
