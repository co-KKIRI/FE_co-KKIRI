import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

import Banners from "@/components/domains/home/Banners";
import HotAndNewSection from "@/components/domains/home/HotAndNewSection";
import { HOT_AND_NEW_LIST } from "@/constants/hotAndNewList";
//mock 데이터
import { mainStudyList } from "@/lib/mock/mainStudyList";

export default function Home() {
  return (
    <Container>
      <Banners />
      <Box>
        {Object.entries(HOT_AND_NEW_LIST).map(([key, { title, path }]) => (
          <HotAndNewSection key={key} category={title} path={path} cardDataList={mainStudyList.result[key]} />
        ))}
      </Box>
    </Container>
  );
}

const {
  spacing,
  mediaQueries: { desktop, tablet, mobile },
} = DESIGN_TOKEN;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6rem;

  ${desktop} {
    padding: ${spacing.desktop};
    padding-bottom: 12rem;
  }

  ${tablet} {
    padding: ${spacing.tablet};
    padding-bottom: 13.4rem;
  }

  ${mobile} {
    padding: ${spacing.mobile};
    padding-bottom: 20rem;
  }
`;

const Box = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;

  ${mobile} {
    align-items: normal;
    gap: 2rem;
  }
`;
