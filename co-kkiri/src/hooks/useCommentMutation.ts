import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment, deleteComment, editComment } from "@/lib/api/comment";
import { CommentApiRequestDto } from "@/lib/api/comment/type";

interface EditCommentPayload {
  commentId: number;
  content: CommentApiRequestDto;
}

export default function useCommentMutation(postId: number) {
  const queryClient = useQueryClient();
  const invalidateComments = () => queryClient.invalidateQueries({ queryKey: ["comments", postId] });

  const uploadMutation = useMutation({
    mutationFn: (content: CommentApiRequestDto) => createComment(postId, content),
    onSuccess: invalidateComments,
  });

  const editMutation = useMutation({
    mutationFn: ({ commentId, content }: EditCommentPayload) => editComment(postId, commentId, content),
    onSuccess: invalidateComments,
  });

  const deleteMutation = useMutation({
    mutationFn: (commentId: number) => deleteComment(postId, commentId),
    onSuccess: invalidateComments,
  });

  return { uploadMutation, editMutation, deleteMutation };
}
