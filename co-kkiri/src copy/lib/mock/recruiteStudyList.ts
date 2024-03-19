interface RecruitedStudy {
  postId: number;
  title: string;
  //status: string; // 필요한지 논의 필요, 모집 완료 기능이 있기 때문에 필요할 듯
  //recruitEndAt: string;
}

interface MyRecruitedStudyList {
  result: {
    recruitedStudyList: RecruitedStudy[];
  };
}

export const recruitedStudyList: MyRecruitedStudyList = {
  result: {
    recruitedStudyList: [
      { postId: 1, title: "자바스크립트 스터디1" },
      { postId: 2, title: "자바스크립트 스터디2" },
      { postId: 3, title: "자바스크립트 스터디3" },
      { postId: 4, title: "자바스크립트 스터디4" },
    ],
  },
};
