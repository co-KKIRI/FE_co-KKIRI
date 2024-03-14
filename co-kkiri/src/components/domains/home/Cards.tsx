import useSideBarStore from "@/stores/sideBarStore";

import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

import Card from "@/components/commons/Card";

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

interface CardsProps {
  cardDataList: CardData[];
}

export default function Cards({ cardDataList }: CardsProps) {
  const isSideBarOpen = useSideBarStore((state) => state.isSideBarOpen);

  return (
    <Wrapper $isSideBarOpen={isSideBarOpen}>
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

const Wrapper = styled.div<{ $isSideBarOpen: boolean }>`
  display: flex;

  ${desktop} {
    gap: 2rem;
    ${({ $isSideBarOpen }) =>
      $isSideBarOpen
        ? `  display: grid;
    grid-template:
      1fr 1fr /
      1fr 1fr;
    `
        : ""}
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
