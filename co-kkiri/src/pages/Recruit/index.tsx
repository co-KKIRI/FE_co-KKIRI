import RecruitmentRequestLayout from "@/components/commons/RecruitmentRequestLayout";
import * as S from "./styled";
import { RecruitmentRequest } from "@/types/recruitmentRequestTypes";
import { useEffect } from "react";

export default function Recruit() {
  const handleSubmit = async (selectedOptions: RecruitmentRequest) => {
    console.log(selectedOptions);
  };

  return (
    <S.Container>
      <RecruitmentRequestLayout onSubmit={handleSubmit} buttonText="글 등록하기" />
    </S.Container>
  );
}
