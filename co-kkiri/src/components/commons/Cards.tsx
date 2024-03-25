import Card from "@/components/commons/Card";
import useResponsiveSidebar from "@/hooks/useResponsiveSideBar";
import { PostInfo } from "@/lib/mock/myStudy/applied";
import { StudyInfo } from "@/lib/mock/studyList";
import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

interface CardsProps {
  data: StudyInfo[] | PostInfo[];
}

export default function Cards({ data }: CardsProps) {
  const isSidebarOpenNarrow = useResponsiveSidebar();

  return (
    <Box>
      {data.length === 0 ? (
        <NoResultText $isSidebarOpenNarrow={isSidebarOpenNarrow}>검색 결과가 없어요.</NoResultText>
      ) : (
        <CardList $isSidebarOpenNarrow={isSidebarOpenNarrow}>
          {data.map((data) => (
            <Card key={data.id} page="studyList" cardData={data} />
          ))}
        </CardList>
      )}
    </Box>
  );
}

const { mediaQueries, color } = DESIGN_TOKEN;

const Box = styled.div`
  display: flex;
  justify-content: center;
  ${mediaQueries.tablet} {
    width: 76.8rem;
  }
  ${mediaQueries.mobile} {
    width: 36rem;
  }
`;

const CardList = styled.div<{ $isSidebarOpenNarrow: boolean }>`
  display: grid;
  flex-wrap: wrap;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  ${({ $isSidebarOpenNarrow }) => $isSidebarOpenNarrow && `grid-template-columns: repeat(3, 1fr);`}

  ${mediaQueries.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQueries.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const NoResultText = styled.p<{ $isSidebarOpenNarrow: boolean }>`
  font-size: 1.2rem;
  color: ${color.black};
  text-align: center;
  margin-top: 2rem;
  width: 112rem;
  ${({ $isSidebarOpenNarrow }) => $isSidebarOpenNarrow && `width: 76.8rem;`}

  ${mediaQueries.tablet} {
    width: 76.8rem;
  }

  ${mediaQueries.mobile} {
    width: 36rem;
  }
`;
