export interface StudyInfo {
  id: number;
  type: "STUDY" | "PROJECT";
  recruitEndAt: string;
  status: "READY" | "PROGRESS" | "PROGRESS_END" | "DONE";
  isScraped: boolean;
  progressWay: string;
  title: string;
  position: string[];
  stack: string[];
  memberNickname: string;
  memberProfileImg: string;
  postViews: number;
  postCommentsNum: number;
}

export interface StudyList {
  result: {
    studyList: StudyInfo[];
  };
}

export const StudyListData: StudyList = {
  result: {
    studyList: [
      {
        id: 1,
        type: "STUDY",
        recruitEndAt: "2024-04-30",
        status: "READY",
        isScraped: true,
        progressWay: "온라인",
        title: "프론트엔드 기초 스터디",
        position: ["프론트엔드", "백엔드"],
        stack: ["HTML", "CSS", "JavaScript"],
        memberNickname: "개발자A",
        memberProfileImg: "",
        postViews: 150,
        postCommentsNum: 10,
      },
      {
        id: 2,
        type: "STUDY",
        recruitEndAt: "2024-05-15",
        status: "READY",
        isScraped: true,
        progressWay: "오프라인",
        title: "백엔드 심화 스터디",
        position: ["프론트엔드", "백엔드", "디자이너"],
        stack: ["Node.js", "Express", "MongoDB"],
        memberNickname: "개발자B",
        memberProfileImg: "",
        postViews: 200,
        postCommentsNum: 20,
      },
      {
        id: 3,
        type: "STUDY",
        recruitEndAt: "2024-05-20",
        status: "READY",
        isScraped: false,
        progressWay: "온라인",
        title: "모바일 앱 개발 스터디",
        position: ["IOS", "안드로이드"],
        stack: [],
        memberNickname: "개발자C",
        memberProfileImg: "",
        postViews: 120,
        postCommentsNum: 5,
      },
      {
        id: 4,
        type: "STUDY",
        recruitEndAt: "2024-06-01",
        status: "READY",
        isScraped: false,
        progressWay: "오프라인",
        title: "데이터 분석 스터디",
        position: ["백엔드"],
        stack: ["Python", "R", "SQL"],
        memberNickname: "분석가A",
        memberProfileImg: "",
        postViews: 180,
        postCommentsNum: 15,
      },
      {
        id: 5,
        type: "PROJECT",
        recruitEndAt: "2024-03-20",
        status: "READY",
        isScraped: false,
        progressWay: "온라인",
        title: "풀스택 개발자 되기",
        position: ["프론트엔드", "백엔드"],
        stack: ["React", "Node.js", "MongoDB"],
        memberNickname: "개발자D",
        memberProfileImg: "",
        postViews: 1000,
        postCommentsNum: 50,
      },
      {
        id: 6,
        type: "PROJECT",
        recruitEndAt: "2024-03-25",
        status: "READY",
        isScraped: false,
        progressWay: "오프라인",
        title: "UI/UX 디자인 워크숍",
        position: ["디자이너"],
        stack: ["Figma", "Sketch", "Adobe XD"],
        memberNickname: "디자이너A",
        memberProfileImg: "",
        postViews: 850,
        postCommentsNum: 40,
      },
      {
        id: 7,
        type: "STUDY",
        recruitEndAt: "2024-03-30",
        status: "READY",
        isScraped: true,
        progressWay: "온라인",
        title: "인공지능 기초 스터디",
        position: ["프론트엔드", "백엔드"],
        stack: ["Python", "TensorFlow", "PyTorch"],
        memberNickname: "개발자E",
        memberProfileImg: "",
        postViews: 760,
        postCommentsNum: 25,
      },
      {
        id: 8,
        type: "STUDY",
        recruitEndAt: "2024-04-10",
        status: "READY",
        isScraped: true,
        progressWay: "온라인",
        title: "클라우드 컴퓨팅 스터디",
        position: ["데브옵스"],
        stack: ["AWS", "Azure", "GCP"],
        memberNickname: "개발자F",
        memberProfileImg: "",
        postViews: 500,
        postCommentsNum: 30,
      },
      {
        id: 9,
        type: "PROJECT",
        recruitEndAt: "2024-04-10",
        status: "READY",
        isScraped: false,
        progressWay: "온라인",
        title: "클라우드 서비스 개발 프로젝트",
        position: ["백엔드", "프론트엔드", "데브옵스"],
        stack: ["AWS", "React", "Node.js"],
        memberNickname: "개발자K",
        memberProfileImg: "",
        postViews: 100,
        postCommentsNum: 20,
      },
      {
        id: 10,
        type: "PROJECT",
        recruitEndAt: "2024-05-01",
        status: "READY",
        isScraped: false,
        progressWay: "오프라인",
        title: "인공지능 학습 데이터 구축",
        position: ["백엔드", "데브옵스"],
        stack: ["Python", "TensorFlow"],
        memberNickname: "데이터마스터",
        memberProfileImg: "",
        postViews: 150,
        postCommentsNum: 35,
      },
      {
        id: 11,
        type: "PROJECT",
        recruitEndAt: "2024-06-15",
        status: "READY",
        isScraped: false,
        progressWay: "온라인",
        title: "모바일 앱 리디자인 프로젝트",
        position: ["디자이너", "안드로이드"],
        stack: ["Figma", "Flutter"],
        memberNickname: "디자이너L",
        memberProfileImg: "",
        postViews: 200,
        postCommentsNum: 40,
      },
      {
        id: 12,
        type: "PROJECT",
        recruitEndAt: "2024-07-20",
        status: "READY",
        isScraped: true,
        progressWay: "오프라인",
        title: "블록체인 기반 투표 시스템 개발",
        position: ["데브옵스", "백엔드"],
        stack: ["Ethereum", "Solidity"],
        memberNickname: "블록체인G",
        memberProfileImg: "",
        postViews: 250,
        postCommentsNum: 45,
      },
      {
        id: 13,
        type: "PROJECT",
        recruitEndAt: "2024-03-30",
        status: "READY",
        isScraped: true,
        progressWay: "온라인",
        title: "가상현실 콘텐츠 개발 프로젝트",
        position: ["IOS", "안드로이드"],
        stack: ["Unity", "Blender"],
        memberNickname: "VR마스터",
        memberProfileImg: "",
        postViews: 300,
        postCommentsNum: 50,
      },
      {
        id: 14,
        type: "PROJECT",
        recruitEndAt: "2024-04-15",
        status: "READY",
        isScraped: false,
        progressWay: "오프라인",
        title: "스마트홈 IoT 솔루션 개발",
        position: ["프론트엔드"],
        stack: ["Arduino", "React"],
        memberNickname: "스마트홈J",
        memberProfileImg: "",
        postViews: 350,
        postCommentsNum: 55,
      },
      {
        id: 15,
        type: "PROJECT",
        recruitEndAt: "2024-05-20",
        status: "READY",
        isScraped: false,
        progressWay: "온라인",
        title: "웹 기반 영어 학습 플랫폼 개발",
        position: ["프론트엔드", "백엔드", "디자이너"],
        stack: ["Django", "React"],
        memberNickname: "영어마스터",
        memberProfileImg: "",
        postViews: 400,
        postCommentsNum: 60,
      },
      {
        id: 16,
        type: "PROJECT",
        recruitEndAt: "2024-06-30",
        status: "READY",
        isScraped: true,
        progressWay: "오프라인",
        title: "개인 금융 관리 앱 개발",
        position: ["안드로이드", "백엔드"],
        stack: ["Kotlin", "Spring"],
        memberNickname: "금융의신",
        memberProfileImg: "",
        postViews: 450,
        postCommentsNum: 65,
      },
      {
        id: 17,
        type: "PROJECT",
        recruitEndAt: "2024-07-15",
        status: "READY",
        isScraped: false,
        progressWay: "온라인",
        title: "빅데이터 분석 및 시각화 프로젝트",
        position: [],
        stack: ["Python", "Pandas", "Matplotlib"],
        memberNickname: "데이터G",
        memberProfileImg: "",
        postViews: 500,
        postCommentsNum: 70,
      },
      {
        id: 18,
        type: "PROJECT",
        recruitEndAt: "2024-08-01",
        status: "READY",
        isScraped: false,
        progressWay: "오프라인",
        title: "자율 주행 자동차 시스템 개발",
        position: ["프론트엔드", "백엔드"],
        stack: ["ROS", "C++"],
        memberNickname: "자율주행G",
        memberProfileImg: "",
        postViews: 550,
        postCommentsNum: 75,
      },
      {
        id: 19,
        type: "PROJECT",
        recruitEndAt: "2024-09-10",
        status: "READY",
        isScraped: true,
        progressWay: "온라인",
        title: "스마트 건강 관리 시스템 개발",
        position: ["프론트엔드", "백엔드", "디자이너"],
        stack: ["React", "Node.js"],
        memberNickname: "건강G",
        memberProfileImg: "",
        postViews: 600,
        postCommentsNum: 80,
      },
      {
        id: 20,
        type: "PROJECT",
        recruitEndAt: "2024-10-01",
        status: "READY",
        isScraped: false,
        progressWay: "오프라인",
        title: "스마트 시티 IoT 프로젝트",
        position: ["프론트엔드", "백엔드", "디자이너"],
        stack: ["Raspberry Pi", "Python", "Vue.js"],
        memberNickname: "스마트시티G",
        memberProfileImg: "",
        postViews: 650,
        postCommentsNum: 85,
      },
      {
        id: 21,
        type: "PROJECT",
        recruitEndAt: "2024-11-15",
        status: "READY",
        isScraped: true,
        progressWay: "온라인",
        title: "디지털 마케팅 플랫폼 개발",
        position: ["프론트엔드", "백엔드", "디자이너"],
        stack: ["React", "Node.js", "MongoDB"],
        memberNickname: "마케팅G",
        memberProfileImg: "",
        postViews: 700,
        postCommentsNum: 90,
      },
      {
        id: 22,
        type: "PROJECT",
        recruitEndAt: "2024-12-01",
        status: "READY",
        isScraped: false,
        progressWay: "오프라인",
        title: "AR/VR 콘텐츠 제작 프로젝트",
        position: ["프론트엔드", "백엔드", "디자이너"],
        stack: ["Unity", "C#"],
        memberNickname: "AR/VRG",
        memberProfileImg: "",
        postViews: 750,
        postCommentsNum: 95,
      },
      {
        id: 23,
        type: "PROJECT",
        recruitEndAt: "2025-01-10",
        status: "READY",
        isScraped: true,
        progressWay: "온라인",
        title: "퀀트 트레이딩 알고리즘 개발",
        position: ["프론트엔드", "백엔드", "디자이너"],
        stack: ["Python", "QuantLib"],
        memberNickname: "퀀트G",
        memberProfileImg: "",
        postViews: 800,
        postCommentsNum: 100,
      },
      {
        id: 24,
        type: "PROJECT",
        recruitEndAt: "2025-02-15",
        status: "READY",
        isScraped: false,
        progressWay: "오프라인",
        title: "사물인터넷 센서 네트워크 프로젝트",
        position: ["프론트엔드", "백엔드", "디자이너"],
        stack: ["Arduino", "Raspberry Pi", "LoRaWAN"],
        memberNickname: "IoTG",
        memberProfileImg: "",
        postViews: 850,
        postCommentsNum: 105,
      },
      {
        id: 25,
        type: "PROJECT",
        recruitEndAt: "2025-03-20",
        status: "READY",
        isScraped: true,
        progressWay: "온라인",
        title: "스마트 농업 자동화 시스템 개발",
        position: ["백엔드"],
        stack: ["Python", "Django", "Raspberry Pi"],
        memberNickname: "농업G",
        memberProfileImg: "",
        postViews: 900,
        postCommentsNum: 110,
      },
      {
        id: 26,
        type: "PROJECT",
        recruitEndAt: "2025-04-01",
        status: "READY",
        isScraped: false,
        progressWay: "오프라인",
        title: "스마트 팩토리 자동화 프로젝트",
        position: ["프론트엔드", "백엔드", "디자이너"],
        stack: ["Python", "ROS"],
        memberNickname: "팩토리G",
        memberProfileImg: "",
        postViews: 950,
        postCommentsNum: 115,
      },
      {
        id: 27,
        type: "PROJECT",
        recruitEndAt: "2025-05-15",
        status: "READY",
        isScraped: true,
        progressWay: "온라인",
        title: "데이터 보안 및 암호화 프로젝트",
        position: ["백엔드"],
        stack: ["Cryptography", "Python", "AES"],
        memberNickname: "보안G",
        memberProfileImg: "",
        postViews: 1000,
        postCommentsNum: 120,
      },
      {
        id: 28,
        type: "PROJECT",
        recruitEndAt: "2025-06-01",
        status: "READY",
        isScraped: false,
        progressWay: "오프라인",
        title: "로봇 시각 인식 시스템 개발",
        position: ["프론트엔드", "백엔드", "디자이너"],
        stack: ["Python", "OpenCV", "ROS"],
        memberNickname: "로봇G",
        memberProfileImg: "",
        postViews: 1050,
        postCommentsNum: 125,
      },
      {
        id: 29,
        type: "PROJECT",
        recruitEndAt: "2025-07-15",
        status: "READY",
        isScraped: true,
        progressWay: "온라인",
        title: "인공지능 기반 스피치 인식 프로젝트",
        position: ["백엔드"],
        stack: ["Python", "TensorFlow", "SpeechRecognition"],
        memberNickname: "스피치G",
        memberProfileImg: "",
        postViews: 1100,
        postCommentsNum: 130,
      },
      {
        id: 30,
        type: "PROJECT",
        recruitEndAt: "2025-08-01",
        status: "READY",
        isScraped: false,
        progressWay: "오프라인",
        title: "얼굴 인식 기반 출석 관리 시스템",
        position: ["백엔드"],
        stack: ["Python", "OpenCV", "Django"],
        memberNickname: "출석G",
        memberProfileImg: "",
        postViews: 1150,
        postCommentsNum: 135,
      },
      {
        id: 31,
        type: "PROJECT",
        recruitEndAt: "2025-09-15",
        status: "READY",
        isScraped: true,
        progressWay: "온라인",
        title: "자연어 처리 기반 챗봇 시스템",
        position: ["백엔드"],
        stack: ["Python", "TensorFlow", "NLTK"],
        memberNickname: "챗봇G",
        memberProfileImg: "",
        postViews: 1200,
        postCommentsNum: 140,
      },
      {
        id: 32,
        type: "PROJECT",
        recruitEndAt: "2025-10-01",
        status: "READY",
        isScraped: false,
        progressWay: "오프라인",
        title: "데이터 기반 인공지능 트레이딩 시스템",
        position: ["백엔드"],
        stack: ["Python", "Pandas", "Scikit-learn"],
        memberNickname: "AI트레이딩G",
        memberProfileImg: "",
        postViews: 1250,
        postCommentsNum: 145,
      },
      {
        id: 33,
        type: "PROJECT",
        recruitEndAt: "2025-11-15",
        status: "READY",
        isScraped: true,
        progressWay: "온라인",
        title: "스마트 홈 네트워크 시스템",
        position: [],
        stack: ["Raspberry Pi", "Arduino", "LoRaWAN"],
        memberNickname: "스마트홈네트워크G",
        memberProfileImg: "",
        postViews: 1300,
        postCommentsNum: 150,
      },
      {
        id: 34,
        type: "PROJECT",
        recruitEndAt: "2025-12-01",
        status: "READY",
        isScraped: false,
        progressWay: "오프라인",
        title: "빅데이터 기반 스마트 시티 구축",
        position: ["프론트엔드", "백엔드"],
        stack: ["Python", "Django", "Vue.js"],
        memberNickname: "빅데이터스마트시티G",
        memberProfileImg: "",
        postViews: 1350,
        postCommentsNum: 155,
      },
    ],
  },
};
