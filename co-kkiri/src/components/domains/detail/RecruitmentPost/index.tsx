import * as S from "./RecruitmentPost.styled";
import UserInfo from "@/components/commons/UserInfo";
import PostManagementButtons from "../PostManagementButtons";
import Count from "@/components/commons/Count";
import { ICONS } from "@/constants/icons";
import DOMPurify from "dompurify";
import { createTimePassedMessage } from "@/utils/formatDate";
import { PostDetails, PostApplyStatus } from "@/lib/api/post/type";

interface RecruitmentPostProps {
  postDetails: PostDetails;
  postApplyStatus: PostApplyStatus;
  className?: string;
}

export default function RecruitmentPost({ postDetails, postApplyStatus, className }: RecruitmentPostProps) {
  const {
    postTitle,
    postContent,
    userProfileImg: profileImageUrl,
    userNickname: nickname,
    createdAt,
    viewCount,
    scrapCount,
  } = postDetails;

  const userInfo = { nickname, profileImageUrl };
  const isMine = postApplyStatus === "OWNER";

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
        <Count icon={ICONS.eye} count={viewCount} />
        <Count icon={ICONS.scrapEmpty} count={scrapCount} />
      </S.CountWrapper>
    </S.Container>
  );
}
