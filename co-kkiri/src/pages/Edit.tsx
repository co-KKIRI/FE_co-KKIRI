import RecruitmentRequestLayout from "@/components/commons/RecruitmentRequestLayout";
import * as S from "@/pages/Recruit/styled";
import { RecruitmentRequest } from "@/types/recruitmentRequestTypes";
import { useEffect, useState } from "react";

export default function Edit() {
  const [defaultOption, setDefaultOption] = useState<RecruitmentRequest>({
    type: "STUDY",
    recruitEndAt: "",
    progressPeriod: "",
    capacity: undefined,
    contactWay: "",
    progressWay: "",
    stacks: [],
    positions: [],
    title: "",
    content: "",
    link: "",
  });

  const handleSubmit = async (selectedOptions: RecruitmentRequest) => {
    console.log(selectedOptions);
  };

  const handleLodePost = () => {};

  useEffect(() => {
    handleLodePost();
  }, []);

  return (
    <S.Container>
      <RecruitmentRequestLayout defaultOption={defaultOption} onSubmit={handleSubmit} buttonText="수정하기" />
    </S.Container>
  );
}
