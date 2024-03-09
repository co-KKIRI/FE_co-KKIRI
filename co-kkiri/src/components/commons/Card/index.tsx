import * as S from "./Card.styled";
import Header from "./Header";
import ProjectChip from "../Chips/ProjectChip";
import Scrap from "./Scrap";
import Title from "./Title";
import Positions from "./Positions";
import Stacks from "./Stacks";
import Count from "./Count";
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
  user: { nickname: string; profileImage: null | string };
  viewCount: number;
  commentCount: number;
}

interface CardProps {
  page: "home" | "studyList";
  cardData: CardData;
  isSidebarOpen: boolean;
}

export default function Card({ page, isSidebarOpen, cardData }: CardProps) {
  const { type, scrap, recruitEndAt, progressWay, title, position, stack, user, viewCount, commentCount } = cardData;

  return (
    <S.Container $page={page} $isSidebarOpen={isSidebarOpen}>
      {page === "studyList" && (
        <S.TypeWrapper>
          <ProjectChip label={type} />
          <Scrap scrap={scrap} size={3.6} />
        </S.TypeWrapper>
      )}
      <S.UpperBox $page={page}>
        <S.HeaderWrapper $page={page}>
          <S.HeaderPadding $page={page}>
            <Header deadline={recruitEndAt} progressWay={progressWay} />
          </S.HeaderPadding>
          {page === "home" && <Scrap scrap={scrap} size={2.8} />}
        </S.HeaderWrapper>
        <S.ContentWrapper>
          <Title title={title} />
          <Positions position={position} />
          {page === "studyList" && <Stacks stack={stack} />}
        </S.ContentWrapper>
      </S.UpperBox>
      <S.BreakLine />
      <S.FooterBox>
        {/* UserInfo 컴포넌트로 대체 */}
        <div style={{ height: 36 }}>코끼리</div>
        <S.CountWrapper>
          <Count icon={ICONS.eye} count={viewCount} />
          <Count icon={ICONS.comment} count={commentCount} />
        </S.CountWrapper>
      </S.FooterBox>
    </S.Container>
  );
}
