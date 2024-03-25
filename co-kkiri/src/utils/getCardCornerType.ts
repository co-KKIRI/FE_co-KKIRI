export const getCardCornerType = (currentCategory: string | undefined, status: string) => {
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
