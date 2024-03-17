export const getTypeLabel = (type: "STUDY" | "PROJECT") => {
  switch (type) {
    case "STUDY":
      return "스터디";
    case "PROJECT":
      return "프로젝트";
  }
};
