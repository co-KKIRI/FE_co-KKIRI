import RecruitmentRequestLayout from "@/components/commons/RecruitmentRequestLayout";
import * as S from "@/pages/Recruit/styled";
import { RecruitApiRequestDto, PostDetailApiResponseDto } from "@/lib/api/post/type";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { modifyPost, getPostDetail } from "@/lib/api/post";
import { useNavigate, useParams } from "react-router-dom";
import { ApiRequestResponse } from "@/lib/api/axios";

export default function Edit() {
  const [defaultOption, setDefaultOption] = useState<RecruitApiRequestDto>();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { postId } = useParams();

  // useQuery를 통해 데이터 가져오기
  const { data } = useQuery({
    queryKey: ["Post"],
    queryFn: () => (postId ? getPostDetail(+postId) : null),
  });

  // useMutation을 사용하여 데이터 수정하기
  const editPost = useMutation<{ result: { postId: number } }, Error, RecruitApiRequestDto>({
    mutationFn: (selectedOptions: RecruitApiRequestDto) => modifyPost(+postId!, selectedOptions),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post"] });
      navigate(`/post/${postId}`);
    },
  });

  // 폼 제출 핸들러
  const handleSubmit = (selectedOptions: RecruitApiRequestDto) => {
    editPost.mutate(selectedOptions);
  };

  useEffect(() => {
    // 데이터가 로드되면 기본값 설정
    data &&
      setDefaultOption({
        title: data.data?.postTitle || null,
        content: data.data?.postContent || null,
        type: data.data?.type || "STUDY",
        recruitEndAt: data.data?.recruitEndAt || "",
        progressPeriod: data.data?.progressPeriod || null,
        progressWay: data.data?.progressWay || null,
        contactWay: data.data?.contactWay || null,
        capacity: data.data?.capacity || null,
        positions: data.data?.positions || [],
        stacks: data.data?.stacks || [],
        link: data.data?.link || null,
      });
  }, [data]);

  return (
    <S.Container>
      <RecruitmentRequestLayout defaultOption={defaultOption} onSubmit={handleSubmit} buttonText="수정하기" />
    </S.Container>
  );
}
