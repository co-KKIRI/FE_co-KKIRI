import RecruitmentRequestLayout from "@/components/commons/RecruitmentRequestLayout";
import * as S from "./styled";
import { PostDetailApiResponseDto, RecruitApiRequestDto } from "@/lib/api/post/type";
import { createPost } from "@/lib/api/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ApiRequestResponse } from "@/lib/api/axios";

export default function Recruit() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // 포스트 업로드하기
  const uploadPost = useMutation<ApiRequestResponse<PostDetailApiResponseDto>, Error, RecruitApiRequestDto>({
    mutationFn: (selectedOptions) => createPost(selectedOptions),
    onSuccess: (postId) => {
      //업로드 성공하면 해당 모집글 상세페이지로 가야하는데 postId를 어떻게 받아가죠..?(url? 응답?)
      queryClient.invalidateQueries({ queryKey: ["posts"] }); // 키값은 나중에 물어보기
      navigate(`/post/${postId}`);
    },
  });

  const handleSubmit = (selectedOptions: RecruitApiRequestDto) => {
    if (
      selectedOptions.recruitEndAt !== null &&
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
