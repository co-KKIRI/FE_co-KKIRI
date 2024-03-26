import RecruitmentRequestLayout from "@/components/commons/RecruitmentRequestLayout";
import * as S from "./styled";
import { RecruitApiRequestDto } from "@/lib/api/post/type";
import { createPost } from "@/lib/api/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Recruit() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [selectedOptions, setSelectedOptions] = useState<RecruitApiRequestDto>({
    type: "STUDY",
    recruitEndAt: "",
    progressPeriod: "",
    capacity: 999,
    contactWay: "",
    progressWay: "",
    stacks: [],
    positions: [],
    title: "",
    content: "",
    link: "",
  });

  // 포스트 업로드하기
  const uploadPost = useMutation<{ postId: number }, Error, RecruitApiRequestDto>({
    mutationFn: (selectedOptions: RecruitApiRequestDto) => createPost(selectedOptions),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["posts"] }); //키값 물어보기
      navigate(`/post/${data.postId}`);
    },
  });

  const handleSubmit = (selectedOptions: RecruitApiRequestDto) => {
    if (
      selectedOptions.recruitEndAt !== "" &&
      selectedOptions.progressWay !== "" &&
      selectedOptions.positions.length > 0
    ) {
      uploadPost.mutate(selectedOptions);
    }
  };

  return (
    <S.Container>
      <RecruitmentRequestLayout
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        onSubmit={handleSubmit}
        buttonText="글 등록하기"
      />
    </S.Container>
  );
}
