import { Link } from "react-router-dom";
import useMyStudyStore from "@/stores/myStudyStore";

import * as S from "./Card.styled";

import Header from "./Header";
import Title from "./Title";
import ProjectChip from "../Chips/ProjectChip";
import CardCornerButton from "../CardCornerButton";
import Stacks from "../Stacks";
import Positions from "../Positions";
import Count from "../Count";
import UserInfo from "../UserInfo";

import useResponsiveSidebar from "@/hooks/useResponsiveSideBar";
import { getCardCornerType } from "@/utils/getCardCornerType";
import { ICONS } from "@/constants/icons";
import { PostInfo } from "@/lib/api/post/type";

interface CardProps {
  page?: "home" | "studyList";
  cardData: PostInfo;
}

export default function Card({ page = "home", cardData }: CardProps) {
  const { currentCategory } = useMyStudyStore();
  const {
    postId,
    type,
    status,
    isScraped,
    recruitEndAt,
    progressWay,
    title,
    positions,
    stacks,
    memberNickname,
    memberProfileImg,
    viewCount,
    commentCount,
  } = cardData;
  const isSidebarOpenNarrow = useResponsiveSidebar();
  const cardCornerType = getCardCornerType(currentCategory, status);

  return (
    <Link to={`/list/${postId}`}>
      <S.Container $page={page} $isSidebarOpenNarrow={isSidebarOpenNarrow}>
        {page === "studyList" && (
          <S.TypeWrapper>
            <S.ProjectChip>
              <ProjectChip label={type} />
            </S.ProjectChip>
            <CardCornerButton isScraped={isScraped} cardCornerType={cardCornerType} postId={postId} />
          </S.TypeWrapper>
        )}
        <S.UpperBox $page={page}>
          <S.HeaderWrapper $page={page}>
            <S.HeaderPadding $page={page}>
              <Header deadline={recruitEndAt} progressWay={progressWay} />
            </S.HeaderPadding>
            {page === "home" && <S.HomeCardCornerButton isScraped={isScraped} />}
          </S.HeaderWrapper>
          <S.ContentWrapper>
            <Title title={title} />
            <Positions positions={positions} variant="card" page={page} />
            {page === "studyList" && <Stacks stacks={stacks} variant="card" />}
          </S.ContentWrapper>
        </S.UpperBox>
        <S.BreakLine />
        <S.FooterBox>
          <UserInfo user={{ nickname: memberNickname, profileImageUrl: memberProfileImg }} />
          <S.CountWrapper>
            <Count icon={ICONS.eye} count={viewCount} />
            <Count icon={ICONS.comment} count={commentCount} />
          </S.CountWrapper>
        </S.FooterBox>
      </S.Container>
    </Link>
  );
}
