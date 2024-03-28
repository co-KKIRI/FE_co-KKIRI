import { Option } from "@/components/commons/Form/RHFDropdown";
import { ROUTER_PATH } from "@/lib/path";

const { MY_PAGE, MY_STUDY } = ROUTER_PATH;

type DropdownInfo = {
  [key: string]: {
    [key: string]: Array<Option>;
  };
};

export const DROPDOWN_FORM_INFO: DropdownInfo = {
  user: {
    position: [
      { label: "풀스택", value: "풀스택" },
      { label: "프론트엔드", value: "프론트엔드" },
      { label: "백엔드", value: "백엔드" },
      { label: "디자이너", value: "디자이너" },
      { label: "IOS", value: "IOS" },
      { label: "안드로이드", value: "안드로이드" },
      { label: "데브옵스", value: "데브옵스" },
    ],
    career: [
      { label: "신입", value: 0 },
      { label: "1년차", value: 1 },
      { label: "2년차", value: 2 },
      { label: "3년차", value: 3 },
      { label: "4년차", value: 4 },
      { label: "5년차", value: 5 },
      { label: "5년차 이상", value: 999 },
    ],
  },
  recruitment: {
    progressPeriod: [
      { label: "협의 후 결정", value: "협의 후 결정" },
      { label: "1주", value: "1주" },
      { label: "2주", value: "2주" },
      { label: "3주", value: "3주" },
      { label: "1개월", value: "1개월" },
      { label: "2개월", value: "2개월" },
      { label: "3개월", value: "3개월" },
      { label: "4개월", value: "4개월" },
      { label: "5개월", value: "5개월" },
      { label: "6개월", value: "6개월" },
      { label: "6개월 이상", value: "6개월 이상" },
    ],
    progressWay: [
      { label: "온라인", value: "온라인" },
      { label: "오프라인", value: "오프라인" },
      { label: "온/오프라인", value: "온/오프라인" },
    ],
    capacity: [
      { label: "인원 미정", value: 0 },
      { label: "1명", value: 1 },
      { label: "2명", value: 2 },
      { label: "3명", value: 3 },
      { label: "4명", value: 4 },
      { label: "5명", value: 5 },
      { label: "6명", value: 6 },
      { label: "7명", value: 7 },
      { label: "8명", value: 8 },
      { label: "9명", value: 9 },
      { label: "10명 이상", value: 10 },
    ],
    contactWay: [
      { label: "기타", value: "기타" },
      { label: "카카오 오픈톡", value: "카카오 오픈톡" },
      { label: "이메일", value: "이메일" },
      { label: "구글폼", value: "구글폼" },
    ],
  },
};

export const DROPDOWN_FILTER_INFO: DropdownInfo = {
  filter: {
    position: [
      { label: "전체", value: "전체" },
      { label: "프론트엔드", value: "프론트엔드" },
      { label: "백엔드", value: "백엔드" },
      { label: "디자이너", value: "디자이너" },
      { label: "IOS", value: "IOS" },
      { label: "안드로이드", value: "안드로이드" },
      { label: "데브옵스", value: "데브옵스" },
    ],
    progressWay: [
      { label: "전체", value: "전체" },
      { label: "온라인", value: "온라인" },
      { label: "오프라인", value: "오프라인" },
      { label: "온/오프라인", value: "온/오프라인" },
    ],
  },
  sort: {
    sort: [
      { label: "최신순", value: "LATEST" },
      { label: "마감순", value: "BYDEADLINE" },
      { label: "조회순", value: "BYVIEW" },
    ],
  },
  popover: {
    popover: [
      { label: "나의 스터디", value: MY_STUDY },
      { label: "마이페이지", value: MY_PAGE },
      { label: "로그아웃", value: "" },
    ],
  },
};

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
      values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 999],
    },
    contactWay: {
      defaultValue: "연락 방식",
      options: ["기타", "카카오 오픈톡", "이메일", "구글폼"],
      values: ["기타", "카카오 오픈톡", "이메일", "구글폼"],
      placeholder: ["기타", "오픈톡 링크", "이메일 주소", "구글폼 주소"],
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
