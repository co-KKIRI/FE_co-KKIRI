import { MyScrapApiResponseDto } from "@/lib/api/myPage/type";
import SectionTitle from "../manage/SectionTitle";
import Card from "@/components/commons/Card";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

interface ScrapListProps {
  data: MyScrapApiResponseDto["data"];
}
export default function ScrapList({ data }: ScrapListProps) {
  const count = data.filter((scrap) => scrap.isScraped).length;

  return (
    <Container>
      <SectionTitle title="스터디/프로젝트 스크랩 목록" count={count} type="cardList" />
      <Wrapper>
        {data.map((scrap) => {
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
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
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
