import * as S from "./Card.styled";
import { Link } from "react-router-dom";

import Header from "./Header";
import Title from "./Title";
import ProjectChip from "../Chips/ProjectChip";
import Scrap from "../Scrap";
import Positions from "../Positions";
import Stacks from "../Stacks";
import Count from "../Count";
import UserInfo from "../UserInfo";

import { ICONS } from "@/constants/icons";

// 임시
interface Position {
  name: string;
}

//임시
interface Stack {
  name: string;
  img: string;
}

//임시
interface CardData {
  id: number;
  type: "스터디" | "프로젝트";
  scrap: boolean;
  recruitEndAt: string;
  progressWay: string;
  title: string;
  position: Position[];
  stack: Stack[];
  user: { nickname: string; profileImage: string };
  viewCount: number;
  commentCount: number;
}

interface CardProps {
  page?: "home" | "studyList";
  cardData: CardData;
  scrapClick?: () => void;
}

export default function Card({ page = "home", cardData, scrapClick }: CardProps) {
  //임시
  const isSidebarOpen = false;
  const { id, type, scrap, recruitEndAt, progressWay, title, position, stack, user, viewCount, commentCount } =
    cardData;

  return (
    <Link to={`/list/${id}`}>
      <S.Container $page={page} $isSidebarOpen={isSidebarOpen}>
        {page === "studyList" && (
          <S.TypeWrapper>
            <S.ProjectChip>
              <ProjectChip label={type} />
            </S.ProjectChip>
            <Scrap wasScraped={scrap} width={36} onClick={scrapClick} />
          </S.TypeWrapper>
        )}
        <S.UpperBox $page={page}>
          <S.HeaderWrapper $page={page}>
            <S.HeaderPadding $page={page}>
              <Header deadline={recruitEndAt} progressWay={progressWay} />
            </S.HeaderPadding>
            {page === "home" && <Scrap wasScraped={scrap} width={28} />}
          </S.HeaderWrapper>
          <S.ContentWrapper>
            <Title title={title} />
            <Positions position={position} />
            {page === "studyList" && <Stacks stack={stack} />}
          </S.ContentWrapper>
        </S.UpperBox>
        <S.BreakLine />
        <S.FooterBox>
          <UserInfo user={user} />
          <S.CountWrapper>
            <Count icon={ICONS.eye} count={viewCount} />
            <Count icon={ICONS.comment} count={commentCount} />
          </S.CountWrapper>
        </S.FooterBox>
      </S.Container>
    </Link>
  );
}
