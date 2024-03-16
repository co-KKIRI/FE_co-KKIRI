import { StackPosition } from "@/types/StackTypes";

export type StackPositionFilter = "ALL" | StackPosition;

export const mappedFilter: Record<string, StackPositionFilter> = {
  전체: "ALL",
  프론트엔드: "FRONT_END",
  백엔드: "BACK_END",
  모바일: "MOBILE",
  기타: "OTHERS",
};

export const getFilterKey = (value: StackPositionFilter) => {
  return Object.keys(mappedFilter).find((key) => mappedFilter[key] === value) || "ALL";
};
