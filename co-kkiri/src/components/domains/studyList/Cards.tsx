import Card from "@/components/commons/Card";
import useResponsiveSidebar from "@/hooks/useResponsiveSideBar";
import { StudyInfo } from "@/lib/mock/studyList";
import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

interface CardsProps {
  data: StudyInfo[];
}

export default function Cards({ data }: CardsProps) {
  const isSidebarOpenNarrow = useResponsiveSidebar();
  return (
    <Wrapper>
      {data.length === 0 ? (
        <NoResultText>검색 결과가 없습니다.</NoResultText>
      ) : (
        <CardList $isSidebarOpenNarrow={isSidebarOpenNarrow}>
          {data.map((data) => (
            <Card key={data.id} page="studyList" cardData={data} />
          ))}
        </CardList>
      )}
    </Wrapper>
  );
}

const { mediaQueries, color } = DESIGN_TOKEN;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CardList = styled.div<{ $isSidebarOpenNarrow: boolean }>`
  display: grid;
  flex-wrap: wrap;
  gap: 2rem;
  ${mediaQueries.desktop} {
    grid-template-columns: repeat(4, 1fr);
    ${({ $isSidebarOpenNarrow }) =>
      $isSidebarOpenNarrow &&
      `  display: grid;
    grid-template:
      1fr 1fr /
      1fr 1fr;
    `}
  }

  ${mediaQueries.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQueries.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const NoResultText = styled.p`
  font-size: 1.2rem;
  color: ${color.black};
  text-align: center;
  margin-top: 2rem;
`;
