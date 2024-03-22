import { useState } from "react";
import RecruitmentRequestLayout from "@/components/commons/RecruitmentRequestLayout";
import { RecruitmentRequest } from "@/types/recruitmentRequestTypes";

import * as S from "./styled";

export default function Recruit() {
  const [selectedOptions, setSelectedOptions] = useState<RecruitmentRequest>({
    type: "",
    recruitEndAt: "",
    progressPeriod: "",
    capacity: 0,
    contactWay: "",
    progressWay: "",
    stacks: [],
    positions: [],
    title: "",
    content: "",
    link: "",
  });

  return (
    <S.Container>
      <RecruitmentRequestLayout />
    </S.Container>
  );
}
