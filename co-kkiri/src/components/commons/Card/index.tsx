import * as S from "./Card.styled";
import { Link } from "react-router-dom";
import useSideBarStore from "@/stores/sideBarStore";

import Header from "./Header";
import Title from "./Title";
import ProjectChip from "../Chips/ProjectChip";
import Scrap from "../Scrap";
import Positions from "../Positions";
import Stacks from "../Stacks";
import Count from "../Count";
import UserInfo from "../UserInfo";

import { ICONS } from "@/constants/icons";

//임시
interface CardData {
  id: number;
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
}

interface CardProps {
  page?: "home" | "studyList";
  cardData: CardData;
}

export default function Card({ page = "home", cardData }: CardProps) {
  const isSideBarOpen = useSideBarStore((state) => state.isSideBarOpen);

  const {
    id,
    type,
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

  return (
    <Link to={`/list/${id}`}>
      <S.Container $page={page} $isSideBarOpen={isSideBarOpen}>
        {page === "studyList" && (
          <S.TypeWrapper>
            <S.ProjectChip>
              <ProjectChip label={type} />
            </S.ProjectChip>
            <Scrap wasScraped={isScraped} width={36} />
          </S.TypeWrapper>
        )}
        <S.UpperBox $page={page}>
          <S.HeaderWrapper $page={page}>
            <S.HeaderPadding $page={page}>
              <Header deadline={recruitEndAt} progressWay={progressWay} />
            </S.HeaderPadding>
            {page === "home" && <Scrap wasScraped={isScraped} width={28} />}
          </S.HeaderWrapper>
          <S.ContentWrapper>
            <Title title={title} />
            <Positions positions={position} />
            {page === "studyList" && <Stacks stacks={stack} />}
          </S.ContentWrapper>
        </S.UpperBox>
        <S.BreakLine />
        <S.FooterBox>
          <UserInfo user={{ nickname: memberNickname, profileImage: memberProfileImg }} />
          <S.CountWrapper>
            <Count icon={ICONS.eye} count={postViews} />
            <Count icon={ICONS.comment} count={postCommentsNum} />
          </S.CountWrapper>
        </S.FooterBox>
      </S.Container>
    </Link>
  );
}
