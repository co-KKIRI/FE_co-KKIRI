import { GetTypeFromObject } from "@/types/ObjectUtilTypes";

// ProjectDetailCard내 Table에서 사용되는 Key
export type ProjectDetailKey = "recruitEndAt" | "progressPeriod" | "progressWay" | "contactWay" | "positions" | "stacks";

// 구체적인 렌더링 방식
export type RenderType = "text" | "positionChip" | "stackChip";

// ProjectDetailCard 내부에서 Table에게 전달할 Table Config
export type ProjectDetailConfig = {
    [key in ProjectDetailKey]: {
        label: string;
        content: string | string[];
        renderType: RenderType;
    }
}

// ProjectDetailTable에서 사용할 content는 Card 외부에서 받을 예정, 따라서 타입에서 필요한 정보만 추출
export type ProjectDetailContentType = {
    [key in ProjectDetailKey]: GetTypeFromObject<ProjectDetailConfig[key], "content">;
}