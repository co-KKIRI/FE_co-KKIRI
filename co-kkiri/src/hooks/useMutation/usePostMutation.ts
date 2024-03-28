import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost, modifyPost, deletePost, applyPost } from "@/lib/api/post";
import { RecruitApiRequestDto } from "@/lib/api/post/type";

interface ModifyPostPayload {
  postId: number;
  data: RecruitApiRequestDto;
}

export default function usePostMutation() {
  const queryClient = useQueryClient();
  const invalidateStudyList = () => queryClient.invalidateQueries({ queryKey: ["studyList"] }); //스터디리스트 쿼리키 반영

  const uploadMutation = useMutation({
    mutationFn: (data: RecruitApiRequestDto) => createPost(data),
    onSuccess: invalidateStudyList,
    onError: (error) => console.error(error, error.message),
  });

  const editMutation = useMutation({
    mutationFn: ({ postId, data }: ModifyPostPayload) => modifyPost(postId, data),
    onSuccess: invalidateStudyList,
    onError: (error) => console.error(error, error.message),
  });

  const deleteMutation = useMutation({
    mutationFn: (postId: number) => deletePost(postId),
    onSuccess: invalidateStudyList,
    onError: (error) => console.error(error, error.message),
  });

  const applyMutation = useMutation({
    mutationFn: (postId: number) => applyPost(postId),
    onSuccess: (_, postId) => queryClient.invalidateQueries({ queryKey: ["postDetail", postId] }),
    onError: (error) => console.error(error, error.message),
  });

  return { uploadMutation, editMutation, deleteMutation, applyMutation };
}
