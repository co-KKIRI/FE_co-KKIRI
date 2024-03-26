import RecruitmentRequestLayout from "@/components/commons/RecruitmentRequestLayout";
import * as S from "./styled";
import { RecruitApiRequestDto } from "@/lib/api/post/type";
import { createPost } from "@/lib/api/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export default function Recruit() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // 포스트 업로드하기
  const uploadPost = useMutation<{ result: { postId: number } }, Error, RecruitApiRequestDto>({
    mutationFn: (selectedOptions: RecruitApiRequestDto) => createPost(selectedOptions),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      navigate(`/post/${data.result.postId}`);
    },
  });
  const handleSubmit = (selectedOptions: RecruitApiRequestDto) => {
    if (
      selectedOptions.recruitEndAt !== "" &&
      selectedOptions.progressWay !== null &&
      selectedOptions.positions.length > 0
    ) {
      uploadPost.mutate(selectedOptions);
    } else {
      alert("필수값을 입력해주세요");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <S.Container>
      <RecruitmentRequestLayout onSubmit={handleSubmit} buttonText="글 등록하기" />
    </S.Container>
  );
}
