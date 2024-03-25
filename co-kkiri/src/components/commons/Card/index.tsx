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
//임시
import { PostInfo } from "@/lib/mock/myStudy/applied";

//임시
interface CardData {
  id: number;
  type: "STUDY" | "PROJECT";
  status: "READY" | "PROGRESS" | "PROGRESS_END" | "DONE";
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
}

interface CardProps {
  page?: "home" | "studyList";
  cardData: CardData | PostInfo;
}

export default function Card({ page = "home", cardData }: CardProps) {
  const { currentCategory } = useMyStudyStore();
  const {
    id,
    type,
    status,
    isScraped,
    recruitEndAt,
    progressWay,
    title,
    position,
    stack,
    memberNickname,
    memberProfileImg,
    postViews,
    postCommentsNum,
  } = cardData;
  const isSidebarOpenNarrow = useResponsiveSidebar();
  const cardCornerType = getCardCornerType(currentCategory, status);

  return (
    <Link to={`/list/${id}`}>
      <S.Container $page={page} $isSidebarOpenNarrow={isSidebarOpenNarrow}>
        {page === "studyList" && (
          <S.TypeWrapper>
            <S.ProjectChip>
              <ProjectChip label={type} />
            </S.ProjectChip>
            <CardCornerButton isScraped={isScraped} cardCornerType={cardCornerType} postId={id} />
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
            <Positions positions={position} variant="card" page={page} />
            {page === "studyList" && <Stacks stacks={stack} variant="card" />}
          </S.ContentWrapper>
        </S.UpperBox>
        <S.BreakLine />
        <S.FooterBox>
          <UserInfo user={{ nickname: memberNickname, profileImageUrl: memberProfileImg }} />
          <S.CountWrapper>
            <Count icon={ICONS.eye} count={postViews} />
            <Count icon={ICONS.comment} count={postCommentsNum} />
          </S.CountWrapper>
        </S.FooterBox>
      </S.Container>
    </Link>
  );
}
