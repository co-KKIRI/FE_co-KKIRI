import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

import More from "./More";
import Cards from "./Cards";

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
  category: string;
  path: string;
  cardDataList: CardData[];
}

export default function HotAndNewSection({ category, path, cardDataList }: CardsProps) {
  return (
    <Box>
      <Wrapper>
        <h2>{category}</h2>
        <More path={path} />
      </Wrapper>
      <Cards cardDataList={cardDataList} />
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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;

  ${mobile} {
    padding-bottom: 0;
  }

  h2 {
    ${font20Bold}
  }
`;
