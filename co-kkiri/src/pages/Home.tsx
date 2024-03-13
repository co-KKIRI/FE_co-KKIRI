import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

import Banners from "@/components/domains/home/Banners";
import Cards from "@/components/domains/home/Cards";

import { ROUTER_PATH } from "@/lib/path";

const cardDataList = [
  {
    id: 0,
    type: "프로젝트",
    scrap: false,
    recruitEndAt: "2024.3.3",
    progressWay: "온라인",
    title:
      "실제 사용할 쇼핑몰 웹프로젝트 만들어나가실 분 구합니다. 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 ",
    position: [{ name: "프론트엔드" }, { name: "백엔드" }, { name: "디자이너" }],
    stack: [
      { name: "JS", img: "" },
      { name: "TS", img: "" },
      { name: "리액트", img: "" },
    ],
    user: { nickname: "코끼리", profileImage: "" },
    viewCount: 10,
    commentCount: 24,
  },
  {
    id: 1,
    type: "프로젝트",
    scrap: false,
    recruitEndAt: "2024.3.3",
    progressWay: "온라인",
    title:
      "실제 사용할 쇼핑몰 웹프로젝트 만들어나가실 분 구합니다. 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 ",
    position: [{ name: "프론트엔드" }, { name: "백엔드" }, { name: "디자이너" }],
    stack: [
      { name: "JS", img: "" },
      { name: "TS", img: "" },
      { name: "리액트", img: "" },
    ],
    user: { nickname: "코끼리", profileImage: "" },
    viewCount: 10,
    commentCount: 24,
  },
  {
    id: 2,
    type: "프로젝트",
    scrap: false,
    recruitEndAt: "2024.3.3",
    progressWay: "온라인",
    title:
      "실제 사용할 쇼핑몰 웹프로젝트 만들어나가실 분 구합니다. 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 ",
    position: [{ name: "프론트엔드" }, { name: "백엔드" }, { name: "디자이너" }],
    stack: [
      { name: "JS", img: "" },
      { name: "TS", img: "" },
      { name: "리액트", img: "" },
    ],
    user: { nickname: "코끼리", profileImage: "" },
    viewCount: 10,
    commentCount: 24,
  },
  {
    id: 3,
    type: "프로젝트",
    scrap: false,
    recruitEndAt: "2024.3.3",
    progressWay: "온라인",
    title:
      "실제 사용할 쇼핑몰 웹프로젝트 만들어나가실 분 구합니다. 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 쇼핑몰 사장 ",
    position: [{ name: "프론트엔드" }, { name: "백엔드" }, { name: "디자이너" }],
    stack: [
      { name: "JS", img: "" },
      { name: "TS", img: "" },
      { name: "리액트", img: "" },
    ],
    user: { nickname: "코끼리", profileImage: "" },
    viewCount: 10,
    commentCount: 24,
  },
];

export default function Home() {
  return (
    <Container>
      <Banners />
      <Box>
        <Cards
          isSidebarOpen={false}
          category="New! 스터디"
          path={ROUTER_PATH.STUDY_LIST_PATH}
          cardDataList={cardDataList}
        />
        <Cards
          isSidebarOpen={false}
          category="New! 스터디"
          path={ROUTER_PATH.STUDY_LIST_PATH}
          cardDataList={cardDataList}
        />
        <Cards
          isSidebarOpen={false}
          category="New! 스터디"
          path={ROUTER_PATH.STUDY_LIST_PATH}
          cardDataList={cardDataList}
        />
        <Cards
          isSidebarOpen={false}
          category="New! 스터디"
          path={ROUTER_PATH.STUDY_LIST_PATH}
          cardDataList={cardDataList}
        />
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
    gap: 4rem;
  }
`;
