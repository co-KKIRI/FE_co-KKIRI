export interface DetailInfo {
  postTitle: string; //제목
  postContent: string; //내용
  userProfileImg: string; //작성자 프로필이미지
  userNickname: string; //작성자 닉네임
  createdAt: string; //생성 시간 YYYY-MM-DD HH:MM:SS
  views: number; //조회수
  isScraped: boolean; //스크랩 되어있는지 아닌지
  scraps: number; //스크랩수
  type: "STUDY" | "PROJECT"; //스터디 종류
  recruitEndAt: string; // 모집 마감
  progressPeriod: string; //진행 기간 => enum 타입으로 넣을 예정
  progressWay: string; //진행 방법 (온라인/오프라인)
  contactWay: string; //연락 방법
  capacity: number; //모집 인원 ==> 테이블에 추가 예정
  positions: string[]; //포지션
  stacks: string[]; //스택
  commentsNum: number;
}

interface StudyDetailData {
  result: DetailInfo;
}

export const studyDetailData: StudyDetailData = {
  result: {
    postTitle: "실제 사용할 쇼핑몰 웹프로젝트 만들어나가실 분 구합니다.", //제목
    postContent: `<section>
    <h1>모집 소개</h1>
    <br />
    <p>함께 프로젝트를 진행할 디자이너분과 플러터 개발자분을 추가로 모집합니다!</p>
    <p>저희 팀은 <strong>'태스크 관리 어플'</strong>이라는 주제로 개발을 진행 중이며, 현재 기획은 대체로 완성된 상태이고 개발 초기 단계에 있습니다. 현재 구성 인원은 백엔드 3명, 기획 1명, 프론트 2명입니다.</p>
    <p>화면설계서는 다 완성된 상태라 바로 디자인을 진행하실 수 있는 상황입니다!</p>
</section>
<br />
<section>
    <h2>프로젝트 일정과 장소</h2>
    <br />
    <p>프로젝트가 진행 중에 있기 때문에 바로 참여하실 수 있는 분이면 좋겠습니다.</p>
    <p>메인 기능들은 3월까지 1차 완료를 목표로 하고 있으며, 모임은 격주 월요일 저녁 신촌에서 대면으로 진행하고 있습니다.(프로젝트 상황에 따라 비대면 모임이나 대면 모임이 추가로 생길 수 있습니다.)</p>
</section>
<br />
<section>
    <h2>모집 인원</h2>
    <br />
    <p>현재 디자이너 1명, 플러터 개발자 1명(프론트)을 모집하고 있으며, 디자인은 피그마를 사용할 예정입니다.
개인 프로젝트도 좋으니 프로젝트 경험이 한번이라도 있으신 분들이 지원해주셨으면 좋겠습니다.</p>
    <p>또한 정말 열심히 하고 싶기 때문에, 대면 만남이 가능하신 분을 희망합니다!</p>
    <p>현재 성공적인 프로젝트 마무리를 위해 3만원 디파짓을 걷고 있으니 이점 참고해주시길 바랍니다.</p>
    <br />
    <p>같이 열심히 해서 모두에게 좋은 포트폴리오 만들어봐요 :)</p>
    <p>많은 지원 부탁드립니다 :)</p>
`, //내용
    userProfileImg: "", //작성자 프로필이미지
    userNickname: "코끼리", //작성자 닉네임
    createdAt: "2024-03-19 13:00:00", //생성 시간 YYYY-M.-D.
    views: 3, //조회수
    isScraped: false, //스크랩 되어있는지 아닌지
    scraps: 22, //스크랩수
    type: "PROJECT", //스터디 종류
    recruitEndAt: "2024-03-30", // 모집 마감
    progressPeriod: "2개월", //진행 기간 => enum 타입으로 넣을 예정
    progressWay: "온/오프라인", //진행 방법 (온라인/오프라인)
    contactWay: "오픈톡", //연락 방법
    capacity: 2, //모집 인원 ==> 테이블에 추가 예정
    positions: ["프론트엔드", "안드로이드", "디자이너"], //포지션
    stacks: ["AWS", "React", "Node.js"], //스택
    commentsNum: 6, //댓글 수
  },
};
