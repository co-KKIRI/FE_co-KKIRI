import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

import Card from "@/components/commons/Card";
import More from "./More";

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
  isSidebarOpen?: boolean;
  category: string;
  path: string;
  cardDataList: CardData[];
}

export default function Cards({ isSidebarOpen = false, category, path, cardDataList }: CardsProps) {
  return (
    <Box>
      <UpperWrapper>
        <h2>{category}</h2>
        <More path={path} />
      </UpperWrapper>
      <LowerWrapper>
        {cardDataList.map((cardData) => (
          <Card key={cardData.id} page="home" isSidebarOpen={isSidebarOpen} cardData={cardData} />
        ))}
      </LowerWrapper>
    </Box>
  );
}

const {
  typography: { font20Bold },
  mediaQueries: { desktop, tablet, mobile },
} = DESIGN_TOKEN;

const Box = styled.section`
  ${desktop} {
    max-width: 112rem;
  }

  ${tablet} {
    max-width: 70.8rem;
  }
`;

const UpperWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;

  h2 {
    ${font20Bold}
  }
`;

const LowerWrapper = styled.div`
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
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
