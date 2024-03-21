export interface RecruitmentRequest {
  type: string;
  recruitEndAt: string;
  progressPeriod: string;
  capacity: number;
  contactWay: string;
  progressWay: string;
  stacks: string[];
  positions: string[];
  title: string;
  content: string;
  link: string;
}
