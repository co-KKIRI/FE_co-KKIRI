import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

import { getHomeCardList } from "@/lib/api/home";
import Banners from "@/components/domains/home/Banners";
import HotAndNewSection from "@/components/domains/home/HotAndNewSection";
import { HOT_AND_NEW_LIST } from "@/constants/hotAndNewList";
import { HomeCardListType } from "@/types/homeCardListTypes";

export default function Home() {
  const { data: homeCardListData, error: homeCardListError } = useQuery({
    queryKey: ["homeCardList"],
    queryFn: getHomeCardList,
  });

  const homeCardList: HomeCardListType = homeCardListData ?? {
    newStudyLists: [],
    hotStudyLists: [],
    newProjectLists: [],
    hotProjectLists: [],
  };

  return (
    <Container>
      <Banners />
      <Box>
        {Object.entries(HOT_AND_NEW_LIST).map(([key, { title, path }]) => (
          <HotAndNewSection
            key={key}
            category={title}
            path={path}
            cardDataList={homeCardList[key as keyof HomeCardListType]}
          />
        ))}
      </Box>
    </Container>
  );
}

const {
  spacing,
  mediaQueries: { tablet, mobile },
} = DESIGN_TOKEN;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 6rem;
  padding: ${spacing.desktop};
  padding-bottom: 12rem;

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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;

  ${mobile} {
    align-items: normal;
    gap: 2rem;
  }
`;
