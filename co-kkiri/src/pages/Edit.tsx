import RecruitmentRequestLayout from "@/components/commons/RecruitmentRequestLayout";
import * as S from "@/pages/Recruit/styled";
import { RecruitApiRequestDto } from "@/lib/api/post/type";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { modifyPost, getPostDetail } from "@/lib/api/post";
import { useNavigate, useParams } from "react-router-dom";
import { validateFormData } from "@/components/commons/RecruitmentRequestLayout/utils";
import { useForm } from "react-hook-form";

export default function Edit() {
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
  });

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();
  // useQuery를 통해 데이터 가져오기
  const { data } = useQuery({
    queryKey: ["Post"],
    queryFn: () => (id ? getPostDetail(+id) : null),
  });

  // useMutation을 사용하여 데이터 수정하기
  const editPost = useMutation<{ result: { postId: number } }, Error, RecruitApiRequestDto>({
    mutationFn: (selectedOptions: RecruitApiRequestDto) => modifyPost(+id!, selectedOptions),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post"] });
      navigate(`/list/${id}`);
    },
  });

  useEffect(() => {
    if (data) {
      setSelectedOptions({
        title: data.postDetails.postTitle,
        content: data.postDetails.postContent,
        type: data.postDetails.type,
        recruitEndAt: data.postDetails.recruitEndAt,
        progressPeriod: data.postDetails.progressPeriod,
        progressWay: data.postDetails.progressWay,
        contactWay: data.postDetails.contactWay,
        capacity: data.postDetails.capacity,
        positions: data.postDetails.positions,
        stacks: data.postDetails.stacks,
        link: data.postDetails.link,
      });
    }
  }, [data]);

  return (
    <S.Container>
      <RecruitmentRequestLayout
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        mutationFn={editPost}
        buttonText="수정하기"
      />
    </S.Container>
  );
}
