import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

import Card from "@/components/commons/Card";

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

interface CardsProps {
  cardDataList: CardData[];
}

export default function Cards({ cardDataList }: CardsProps) {
  return (
    <Wrapper>
      {cardDataList.map((cardData) => (
        <Card key={cardData.id} page="home" cardData={cardData} />
      ))}
    </Wrapper>
  );
}

const {
  spacing,
  mediaQueries: { desktop, tablet, mobile },
} = DESIGN_TOKEN;

const Wrapper = styled.div`
  display: flex;

  ${desktop} {
    gap: 2rem;
  }

  ${tablet} {
    display: grid;
    grid-template:
      1fr 1fr /
      1fr 1fr;
    gap: 1.6rem;
  }

  ${mobile} {
    gap: 1rem;
    overflow: scroll;
    width: calc(100% + 2rem * 2);
    margin-left: -${spacing.mobile};
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
