import { ROUTER_PATH } from "@/lib/path";

const { STUDY_LIST_PATH } = ROUTER_PATH;

export const HOT_AND_NEW_LIST = {
  newStudyList: { title: "New! 스터디", path: STUDY_LIST_PATH },
  hotStudyList: { title: "🎊 인기 스터디 🎊", path: STUDY_LIST_PATH },
  newProjectList: { title: "✨ 신규 프로젝트 ✨", path: STUDY_LIST_PATH },
  hotProjectList: { title: "인기 프로젝트", path: STUDY_LIST_PATH },
};
