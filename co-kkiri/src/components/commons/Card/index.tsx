import * as S from "./Card.styled";
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
  id: number;
  name: string;
}

//임시
interface Stack {
  id: number;
  img: string;
}

//임시
interface CardData {
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
  isSidebarOpen?: boolean;
  cardData: CardData;
  onClick?: () => void;
}

export default function Card({ page = "home", isSidebarOpen = false, cardData, onClick }: CardProps) {
  const { type, scrap, recruitEndAt, progressWay, title, position, stack, user, viewCount, commentCount } = cardData;

  return (
    <S.Container $page={page} $isSidebarOpen={isSidebarOpen} onClick={onClick}>
      {page === "studyList" && (
        <S.TypeWrapper>
          <S.ProjectChip>
            <ProjectChip label={type} />
          </S.ProjectChip>
          <Scrap isScraped={scrap} width={36} />
        </S.TypeWrapper>
      )}
      <S.UpperBox $page={page}>
        <S.HeaderWrapper $page={page}>
          <S.HeaderPadding $page={page}>
            <Header deadline={recruitEndAt} progressWay={progressWay} />
          </S.HeaderPadding>
          {page === "home" && <Scrap isScraped={scrap} width={28} />}
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
  );
}
