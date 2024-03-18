import { CategoryList } from "@/types/categoryTypes";

export type CategoryListFilter = "ALL" | CategoryList;

export const categoryListFilter: { [key in CategoryListFilter]: string } = {
  ALL: "전체",
  STUDY: "스터디",
  PROJECT: "프로젝트",
};
