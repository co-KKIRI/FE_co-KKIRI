import RecruitmentRequestLayout from "@/components/commons/RecruitmentRequestLayout";
import * as S from "@/pages/Recruit/styled";
import { RecruitApiRequestDto } from "@/lib/api/post/type";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { modifyPost } from "@/lib/api/post";
import { useNavigate } from "react-router-dom";
import { getPostDetail } from "@/lib/api/post";
import { useParams } from "react-router-dom";

export default function Edit() {
  const [defaultOption, setDefaultOption] = useState<RecruitApiRequestDto>();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { postId } = useParams();

  //포스트 아이디 값에 해당하는 데이터 블러오기
  const { data } = useQuery({
    queryKey: ["Post"],
    queryFn: () => getPostDetail(+postId),
  });

  //포스트 수정하는 요청 보내기
  const editPost = useMutation({
    mutationFn: (selectedOptions) => modifyPost(+postId, selectedOptions),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post"] });
      navigate(`/post/${postId}`);
    },
  });

  //포스트 수정할떄 필요한 인자값 받아오기
  const handleSubmit = (selectedOptions: RecruitApiRequestDto) => {
    editPost.mutate(selectedOptions);
  };

  useEffect(() => {
    //데이터가 있으면 state에 집어넣기
    data &&
      setDefaultOption({
        title: data.postTitle,
        content: data.postContent,
        type: data.type,
        recruitEndAt: data.recruitEndAt,
        progressPeriod: data.progressPeriod,
        progressWay: data.progressWay,
        contactWay: data.contactWay,
        capacity: data.capacity,
        positions: data.positions,
        stacks: data.stacks,
        link: data.link,
      });
  }, [data]);

  return (
    <S.Container>
      <RecruitmentRequestLayout defaultOption={defaultOption} onSubmit={handleSubmit} buttonText="수정하기" />
    </S.Container>
  );
}
