import { ROUTER_PATH } from "@/lib/path";

const { STUDY_LIST_PATH } = ROUTER_PATH;

export const HOT_AND_NEW_LIST = {
  newStudyLists: { title: "New! 스터디", path: STUDY_LIST_PATH },
  hotStudyLists: { title: "🎊 인기 스터디 🎊", path: STUDY_LIST_PATH },
  newProjectLists: { title: "✨ 신규 프로젝트 ✨", path: STUDY_LIST_PATH },
  hotProjectLists: { title: "인기 프로젝트", path: STUDY_LIST_PATH },
};
