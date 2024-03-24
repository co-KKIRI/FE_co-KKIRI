/**스터디모집하기, 수정하기 (연락 링크 추가 예정)*/
export type RecruitApiRequestDto = {
  type: "STUDY" | "PROJECT";
  recruitEndAt: string;
  progressPeriod: string | null;
  capacity: number | null;
  contactWay: string | null;
  progressWay: string | null;
  stacks: string[] | null;
  positions: string[];
  title: string | null;
  content: string | null;
  link: string | null;
};

type PostInfo = {
  postId: number;
  type: "STUDY" | "PROJECT";
  recruitEndAt: string;
  isScraped: boolean;
  progressWay: string;
  title: string;
  position: string[];
  stack: string[];
  memberNickname: string;
  memberProfileImg: string;
  postViews: number;
  postCommentsNum: number;
};

/**스터디 목록*/
export type ListApiResponseDto = {
  postList: PostInfo[];
};

export type ListApiRequestDto = {
  meetingType?: "ALL" | "STUDY" | "PROJECT";
  position?: string[];
  progressWay?: string;
  stack?: string[];
  sortBy?: "LATEST" | "BYDEADLINE" | "BYVIEW";
};

/**스터디 상세*/
export type PostDetailApiResponseDto = {
  postTitle: string;
  postContent: string;
  userProfileImg: string;
  userNickname: string;
  createdAt: string; //생성 시간 YYYY-MM-DD HH:MM:SS
  views: number;
  isScraped: boolean;
  scraps: number;
  type: "STUDY" | "PROJECT";
  recruitEndAt: string;
  progressPeriod: string; //진행 기간 => enum 타입으로 넣을 예정
  progressWay: string;
  contactWay: string;
  capacity: number;
  positions: string[];
  stacks: string[];
  commentsNum: number;
  link: string;
};
/**스터디 지원 */
export type ApplyPostApiRequestDto = {
  memberId: number;
};

/**스터디 지원 목록 */
export type AppliedMemberListApiRequestDto = {
  order: "ASC" | "DESC"; // 정렬 순서, ASC: 옛날순, DESC: 최신순
  page: number; // 요청할 페이지
  take: number; // 몇개 가져올지
};

type AppliedMember = {
  teamMemberId: number;
  memberId: number;
  nickname: string;
  profileImageUrl: string;
};

export type AppliedMemberListApiResponseDto = {
  appliedPostMemberList: AppliedMember[];
};

/**스터디 프로젝트 정보 */
export type StudyManagementApiResponseDto = {
  postId: number;
  postTitle: string; //제목
  type: "STUDY" | "PROJECT"; //스터디 종류
  progressWay: string; //진행 방법 (온라인/오프라인)
  status: "READY" | "PROGRESS" | "PROGRESS_END" | "DONE"; // 스터디 진행 상태
  contactWay: string; //연락 방법
  capacity: number; //모집 인원 ==> 테이블에 추가 예정
  positions: string[]; //포지션
  isLeader: boolean; // 방장인지 아닌지
};

type ScoutPost = {
  postId: number;
  title: string;
};

/**스카우트 스터디/프로젝트 목록 -백엔드 확인요망*/
export type ScoutListApiResponseDto = {
  content: ScoutPost[];
  // meta: Pageable  페이지네이션 정보, 추후 추가 예정
};

/**스카우트하기 */
export type InviteMemberRequestDto = {
  postId: number;
  memberId: number;
  message: string;
};

/**이미지 업로드하기 */
export type ImageUploadApiResponseDto = {
  uploadUrl: string;
};
