import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

import Card from "@/components/commons/Card";
import useResponsiveSidebar from "@/hooks/useResponsiveSideBar";
import { ListApiResponseDto } from "@/lib/api/post/type";

interface CardsProps {
  cardDataList: ListApiResponseDto["data"];
}

export default function Cards({ cardDataList }: CardsProps) {
  const isSidebarOpenNarrow = useResponsiveSidebar();

  return (
    <Wrapper $isSidebarOpenNarrow={isSidebarOpenNarrow}>
      {cardDataList.map((cardData) => (
        <Card key={cardData.postId} page="home" cardData={cardData} />
      ))}
    </Wrapper>
  );
}

const {
  spacing,
  mediaQueries: { tablet, mobile },
} = DESIGN_TOKEN;

const Wrapper = styled.div<{ $isSidebarOpenNarrow: boolean }>`
  display: flex;
  gap: 2rem;
  ${({ $isSidebarOpenNarrow }) =>
    $isSidebarOpenNarrow
      ? `  display: grid;
    grid-template:
      1fr 1fr /
      1fr 1fr;
    `
      : ""}

  ${tablet} {
    display: grid;
    grid-template:
      1fr 1fr /
      1fr 1fr;
    gap: 1.6rem;
  }

  ${mobile} {
    display: flex;
    gap: 1rem;
    padding: 2rem;
    overflow: scroll;
    width: calc(100% + 2rem * 2);
    margin-left: -${spacing.mobile};
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
