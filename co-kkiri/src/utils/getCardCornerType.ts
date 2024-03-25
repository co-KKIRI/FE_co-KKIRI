import { Pages } from "@/types/pagesTypes";

export const getCardCornerType = (page: Pages, currentCategory: string | undefined, status: string | undefined) => {
  if (page !== "myStudy") {
    return "scrap";
  }
  switch (currentCategory) {
    case "RECRUITING":
    case "ON_GOING":
      return "manage";
    case "COMPLETED":
      return status === "PROGRESS_END" ? "write" : status === "DONE" ? "view" : "scrap";
    default:
      return "scrap";
  }
};
