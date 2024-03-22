import { useState } from "react";
import RecruitmentRequestLayout from "@/components/commons/RecruitmentRequestLayout";
import { RecruitmentRequest } from "@/types/recruitmentRequestTypes";
import Button from "@/components/commons/Button";
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
      <S.SelectContainer>
        <RecruitmentRequestLayout />
        <S.SubmitButtonBox>
          <Button variant="primaryLight">취소하기</Button>
          <Button variant="primary">글 등록하기</Button>
        </S.SubmitButtonBox>
      </S.SelectContainer>
    </S.Container>
  );
}
