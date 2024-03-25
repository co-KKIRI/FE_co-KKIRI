import { CategoryList } from "./categoryTypes";

export interface RecruitmentRequest {
  type: CategoryList;
  recruitEndAt: string;
  progressPeriod: string;
  capacity: number | undefined | null;
  contactWay: string;
  progressWay: string;
  stacks: string[];
  positions: string[];
  title: string;
  content: string;
  link: string;
}
