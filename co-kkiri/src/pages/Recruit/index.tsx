import RecruitmentRequestLayout from "@/components/commons/RecruitmentRequestLayout";
import * as S from "./styled";
import { RecruitApiRequestDto } from "@/lib/api/post/type";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import usePostMutation from "@/hooks/useMutation/usePostMutation";
import { FieldValues } from "react-hook-form";

export default function Recruit() {
  const navigate = useNavigate();
  const { uploadMutation } = usePostMutation();
  const [selectedOptions, setSelectedOptions] = useState<RecruitApiRequestDto>({
    type: "STUDY",
    recruitEndAt: "",
    progressPeriod: "",
    capacity: 11,
    contactWay: "",
    progressWay: "",
    stacks: [],
    positions: [],
    title: "",
    content: "",
    link: "",
  });

  const handleSubmit = (data: FieldValues) => {
    uploadMutation.mutate(data as RecruitApiRequestDto, {
      onSuccess: (data) => {
        navigate(`/list/${data.postId}`);
      },
    });
  };

  return (
    <S.Container>
      <RecruitmentRequestLayout
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        onSubmitClick={handleSubmit}
        buttonText="글 등록하기"
      />
    </S.Container>
  );
}
