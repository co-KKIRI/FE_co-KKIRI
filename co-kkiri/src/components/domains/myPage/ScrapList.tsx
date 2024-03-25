import { MyScrapApiResponseDto } from "@/lib/api/myPage/type";
import SectionTitle from "../manage/SectionTitle";
import Card from "@/components/commons/Card";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

interface ScrapListProps extends MyScrapApiResponseDto {}

export default function ScrapList({ scrapList }: ScrapListProps) {
  const count = scrapList.filter((scrap) => scrap.isScraped).length;

  return (
    <Container>
      <SectionTitle title="스터디/프로젝트 스크랩 목록" count={count} type="cardList" />
      <Wrapper>
        {scrapList?.map((scrap) => {
          return scrap.isScraped && <Card key={scrap.postId} page="studyList" cardData={scrap} />;
        })}
      </Wrapper>
    </Container>
  );
}

const { mediaQueries } = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Wrapper = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  ${mediaQueries.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.6rem;
  }

  ${mediaQueries.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
