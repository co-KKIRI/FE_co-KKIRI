import Card from "@/components/commons/Card";
import { ListApiResponseDto } from "@/lib/api/post/type";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import useResponsiveSidebar from "@/hooks/useResponsiveSideBar";
import { Pages } from "@/types/pagesTypes";
import NoResultText from "./NoResultText";

interface CardsProps {
  data: ListApiResponseDto["data"] | [];
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
        <NoResultText text="검색 결과가 없어요." padding={120} color="black" />
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
