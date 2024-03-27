import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost, modifyPost, deletePost, applyPost } from "@/lib/api/post";
import { ApplyPostApiRequestDto, RecruitApiRequestDto } from "@/lib/api/post/type";

interface ModifyPostPayload {
  postId: number;
  data: RecruitApiRequestDto;
}

interface ApplyPostPayload {
  postId: number;
  data: ApplyPostApiRequestDto;
}

export default function usePostMutation() {
  const queryClient = useQueryClient();
  const invalidateStudyList = () => queryClient.invalidateQueries({ queryKey: ["studyList"] }); //스터디리스트 쿼리키 반영

  const uploadMutation = useMutation({
    mutationFn: (data: RecruitApiRequestDto) => createPost(data),
    onSuccess: invalidateStudyList,
  });

  const editMutation = useMutation({
    mutationFn: ({ postId, data }: ModifyPostPayload) => modifyPost(postId, data),
    onSuccess: invalidateStudyList,
  });

  const deleteMutation = useMutation({
    mutationFn: (postId: number) => deletePost(postId),
    onSuccess: invalidateStudyList,
  });

  const applyMutation = useMutation({
    mutationFn: ({ postId, data }: ApplyPostPayload) => applyPost(postId, data),
    onSuccess: (_, { postId }) => queryClient.invalidateQueries({ queryKey: ["postDetail", postId] }),
  });

  return { uploadMutation, editMutation, deleteMutation, applyMutation };
}
