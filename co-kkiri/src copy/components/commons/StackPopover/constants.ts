import { StackPosition } from "@/types/StackTypes";

export type StackPositionFilter = "ALL" | StackPosition;

export const mappedFilter: { [key in StackPositionFilter]: string } = {
  ALL: "전체",
  FRONT_END: "프론트엔드",
  BACK_END: "백엔드",
  MOBILE: "모바일",
  OTHERS: "기타",
};
