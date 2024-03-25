import { ROUTER_PATH } from "@/lib/path";

const { MY_PAGE, MY_STUDY } = ROUTER_PATH;

export const DROPDOWN_INFO = {
  user: {
    position: {
      defaultValue: "포지션",
      options: ["풀스택", "프론트엔드", "백엔드", "디자이너", "IOS", "안드로이드", "데브옵스"],
      values: ["풀스택", "프론트엔드", "백엔드", "디자이너", "IOS", "안드로이드", "데브옵스"],
    },
    career: {
      defaultValue: "경력",
      options: ["신입", "1년차", "2년차", "3년차", "4년차", "5년차", "5년차 이상"],
      values: [0, 1, 2, 3, 4, 5, 999],
    },
  },
  recruitment: {
    progressPeriod: {
      defaultValue: "진행 기간",
      options: [
        "협의 후 결정",
        "1주",
        "2주",
        "3주",
        "1개월",
        "2개월",
        "3개월",
        "4개월",
        "5개월",
        "6개월",
        "6개월 이상",
      ],
      values: [null, "1주", "2주", "3주", "1개월", "2개월", "3개월", "4개월", "5개월", "6개월", "6개월 이상"],
    },
    progressWay: {
      defaultValue: "진행 방식",
      options: ["온라인", "오프라인", "온/오프라인"],
      values: ["온라인", "오프라인", "온/오프라인"],
    },
    capacity: {
      defaultValue: "모집 인원",
      options: ["인원 미정", "1명", "2명", "3명", "4명", "5명", "6명", "7명", "8명", "9명", "10명 이상"],
      values: [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 999],
    },
    contactWay: {
      defaultValue: "연락 방식",
      options: ["기타", "카카오 오픈톡", "이메일", "구글폼"],
      values: [null, "카카오 오픈톡", "이메일", "구글폼"],
      placeholder: [null, "오픈톡 링크", "이메일 주소", "구글폼 주소"],
    },
  },
  sort: {
    defaultValue: "최신순",
    options: [" 최신순", "마감순", "조회순"],
    values: ["LATEST", "BYDEADLINE", "BYVIEW"],
  },

  filter: {
    position: {
      defaultValue: "포지션",
      options: ["전체", "프론트엔드", "백엔드", "디자이너", "IOS", "안드로이드", "데브옵스"],
      values: ["전체", "프론트엔드", "백엔드", "디자이너", "IOS", "안드로이드", "데브옵스"],
    },
    progressWay: {
      defaultValue: "진행 방식",
      options: ["전체", "온라인", "오프라인", "온/오프라인"],
      values: ["전체", "온라인", "오프라인", "온/오프라인"],
    },
  },

  popover: [
    { option: "나의 스터디", path: MY_STUDY },
    { option: "마이페이지", path: MY_PAGE },
    { option: "로그아웃", path: "" },
  ],
};
