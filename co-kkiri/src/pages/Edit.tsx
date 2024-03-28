import RecruitmentRequestLayout from "@/components/commons/RecruitmentRequestLayout";
import * as S from "@/pages/Recruit/styled";
import { RecruitApiRequestDto } from "@/lib/api/post/type";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPostDetail } from "@/lib/api/post";
import { useNavigate, useParams } from "react-router-dom";
import usePostMutation from "@/hooks/useMutation/usePostMutation";

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

  const navigate = useNavigate();
  const { id } = useParams();
  const postId = Number(id);
  const { editMutation } = usePostMutation();

  // useQuery를 통해 데이터 가져오기
  const { data } = useQuery({
    queryKey: ["postEdit", postId],
    queryFn: () => getPostDetail(postId),
  });

  // 수정 요청 처리
  const handleSubmit = () => {
    editMutation.mutate(
      { postId, data: selectedOptions },
      {
        onSuccess: () => {
          navigate(`/list/${postId}`);
        },
      },
    );
  };

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
        onSubmitClick={handleSubmit}
        buttonText="수정하기"
      />
    </S.Container>
  );
}
