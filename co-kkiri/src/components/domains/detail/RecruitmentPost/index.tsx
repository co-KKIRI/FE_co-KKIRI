import * as S from "./RecruitmentPost.styled";
import UserInfo from "@/components/commons/UserInfo";
import PostManagementButtons from "../PostManagementButtons";
import Count from "@/components/commons/Count";
import { ICONS } from "@/constants/icons";
import { DetailInfo } from "@/lib/mock/studyDetail";
import DOMPurify from "dompurify";
import { createTimePassedMessage } from "@/utils/formatDate";

interface RecruitmentPostProps {
  detailInfo: DetailInfo;
  className?: string;
}

export default function RecruitmentPost({ detailInfo, className }: RecruitmentPostProps) {
  const {
    postTitle,
    postContent,
    userProfileImg: profileImageUrl,
    userNickname: nickname,
    createdAt,
    views,
    scraps,
  } = detailInfo;

  const userInfo = { nickname, profileImageUrl };
  const isMine = true; // 임시

  const sanitizedContent = { __html: DOMPurify.sanitize(postContent) };

  return (
    <S.Container className={className}>
      <S.Title>{postTitle}</S.Title>
      <S.Box>
        <S.PostInfoWrapper>
          <UserInfo user={userInfo} nicknameBold />
          <S.InfoDivider />
          <S.CreatedDate>{createTimePassedMessage(createdAt)}</S.CreatedDate>
        </S.PostInfoWrapper>
        {isMine && <PostManagementButtons />}
      </S.Box>
      <S.HorizontalDivider />
      <S.Content dangerouslySetInnerHTML={sanitizedContent} />
      <S.CountWrapper>
        <Count icon={ICONS.eye} count={views} />
        <Count icon={ICONS.scrapEmpty} count={scraps} />
      </S.CountWrapper>
    </S.Container>
  );
}
