import * as S from "./RecruitmentPost.styled";
import UserInfo from "@/components/commons/UserInfo";
import PostManagementButtons from "../PostManagementButtons";
import Count from "@/components/commons/Count";
import { ICONS } from "@/constants/icons";
import { DetailInfo } from "@/lib/mock/studyDetail";

interface RecruitmentPostProps {
  detailInfo: DetailInfo;
  className?: string;
}

export default function RecruitmentPost({ detailInfo, className }: RecruitmentPostProps) {
  const {
    postTitle,
    postContent,
    userProfileImg: profileImage,
    userNickname: nickname,
    createdAt,
    views,
    scraps,
  } = detailInfo;

  const userInfo = { nickname, profileImage };
  const isMine = true; // 임시

  return (
    <S.Container className={className}>
      <S.Title>{postTitle}</S.Title>
      <S.Box>
        <S.PostInfoWrapper>
          <UserInfo user={userInfo} nicknameBold />
          <S.InfoDivider />
          <S.CreatedDate>2024.3.5</S.CreatedDate> {/* createdAt 데이터 확인후 formatDate 함수 적용해서 변경 예정*/}
        </S.PostInfoWrapper>
        {isMine && <PostManagementButtons />}
      </S.Box>
      <S.HorizontalDivider />
      <S.Content>{postContent}</S.Content>
      <S.CountWrapper>
        <Count icon={ICONS.eye} count={views} />
        <Count icon={ICONS.scrapEmpty} count={scraps} />
      </S.CountWrapper>
    </S.Container>
  );
}
