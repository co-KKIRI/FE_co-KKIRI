import { HomeApiResponseDto } from "@/lib/api/home/type";

type EmptyHomeApiResponse = {
  newStudyLists: [];
  hotStudyLists: [];
  newProjectLists: [];
  hotProjectLists: [];
};

export type HomeCardListType = HomeApiResponseDto | EmptyHomeApiResponse;
