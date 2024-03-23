export interface RecruitmentRequest {
  type: "STUDY" | "PROJECT";
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
