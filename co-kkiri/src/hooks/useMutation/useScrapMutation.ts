import { useMutation, useQueryClient } from "@tanstack/react-query";
import { scrapAdd, scrapCancel } from "@/lib/api/scrap";
import { useToggle } from "usehooks-ts";

function useScrapMutations(postId: number, isScraped: boolean) {
  const queryClient = useQueryClient();
  const [isScrapedValue, toggle] = useToggle(isScraped);

  const ScrapMutation = useMutation({
    mutationFn: () => scrapAdd(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["homeCardList"] });
      queryClient.invalidateQueries({ queryKey: ["/my-page/scrap/list"] });
      queryClient.invalidateQueries({ queryKey: ["postDetail", postId] });
      toggle();
    },
  });

  const CancelScrapMutation = useMutation({
    mutationFn: () => scrapCancel(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["homeCardList"] });
      queryClient.invalidateQueries({ queryKey: ["/my-page/scrap/list"] });
      queryClient.invalidateQueries({ queryKey: ["postDetail", postId] });
      toggle();
    },
  });

  return { ScrapMutation, CancelScrapMutation, isScrapedValue };
}

export default useScrapMutations;
