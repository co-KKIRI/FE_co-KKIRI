import { CategoryList, CategoryStudyStatus } from "@/types/categoryTypes";

export type CategoryListFilter = "ALL" | CategoryList;

export const categoryListFilter: { [key in CategoryListFilter]: string } = {
  ALL: "전체",
  STUDY: "스터디",
  PROJECT: "프로젝트",
};

export const categoryStudyStatusFilter: { [key in CategoryStudyStatus]: string } = {
  APPLIED: "신청 스터디",
  RECRUITING: "모집중",
  ON_GOING: "진행중",
  COMPLETED: "완료",
};
