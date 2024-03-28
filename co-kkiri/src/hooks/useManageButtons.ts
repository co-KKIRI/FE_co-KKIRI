import { studyEnd, studyStart } from "@/lib/api/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export default function useManageButtons() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const goToScoutPage = () => {
    navigate(`/scout`);
  };

  const studyStartMutation = useMutation({
    mutationFn: (postId: number) => studyStart(postId),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const studyEndMutation = useMutation({
    mutationFn: (postId: number) => studyEnd(postId),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const goToPostReviewPage = (postId: number) => {
    navigate(`/review/${postId}`);
  };

  return { goToScoutPage, studyStartMutation, studyEndMutation, goToPostReviewPage };
}
