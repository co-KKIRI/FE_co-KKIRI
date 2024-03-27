import Card from "@/components/commons/Card";
import { ListApiResponseDto } from "@/lib/api/post/type";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import useResponsiveSidebar from "@/hooks/useResponsiveSideBar";
import { Pages } from "@/types/pagesTypes";

interface CardsProps {
  data: ListApiResponseDto["data"] | null | undefined;
  page?: Pages;
}

export default function Cards({ data, page }: CardsProps) {
  const isSidebarOpenNarrow = useResponsiveSidebar();

  return (
    <Box>
      {data ? (
        <CardList $isSidebarOpenNarrow={isSidebarOpenNarrow}>
          {data.map((data) => (
            <div key={data.postId}>
              <Card cardData={data} page={page} />
            </div>
          ))}
        </CardList>
      ) : (
        <NoResultText $isSidebarOpenNarrow={isSidebarOpenNarrow}>검색 결과가 없어요.</NoResultText>
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
