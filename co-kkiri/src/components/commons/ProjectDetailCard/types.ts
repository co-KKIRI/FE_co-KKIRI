import { GetTypeFromObject } from "@/types/objectUtilTypes";

//TODO: DROPDOWN_FORM_INFO keyof typeof로 타입을 만들어서 전달해야 함
export type ContactWay = "기타" | "카카오 오픈톡" | "이메일" | "구글폼";
type ContactWayInfo = { label: ContactWay | null; content: string | null };

// ProjectDetailCard내 Table에서 사용되는 Key
export type ProjectDetailKey =
  | "recruitEndAt"
  | "progressPeriod"
  | "progressWay"
  | "contactWay"
  | "capacity"
  | "positions"
  | "stacks";

// 구체적인 렌더링 방식
export type RenderType = "text" | "positions" | "stacks" | "capacity" | "contactWay";
export type ContentType = string | string[] | number | ContactWayInfo;
// ProjectDetailCard 내부에서 Table에게 전달할 Table Config
export type ProjectDetailConfig = {
  [key in ProjectDetailKey]: {
    label: string;
    content: ContentType;
    renderType: RenderType;
  };
};

// ProjectDetailTable에서 사용할 content는 Card 외부에서 받을 예정, 따라서 타입에서 필요한 정보만 추출
export type ProjectDetailContentType = {
  [key in ProjectDetailKey]: GetTypeFromObject<ProjectDetailConfig[key], "content">;
};
