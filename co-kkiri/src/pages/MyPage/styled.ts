import UserInfo from "@/components/domains/myPage/UserInfo";
import ScrapList from "@/components/domains/myPage/ScrapList";
import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

const { mediaQueries } = DESIGN_TOKEN;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 6rem 0;

  ${mediaQueries.mobile} {
    padding: 2rem 0;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12rem;

  ${mediaQueries.desktop} {
    display: grid;
    gap: 6rem;
    grid-template:
      "wrapper"
      "scrap";
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12rem;

  ${mediaQueries.desktop} {
    flex-direction: row;
    gap: 6rem;
    grid-area: wrapper;
  }
`;

export const Lists = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12rem;
`;

export const UserInfoSection = styled(UserInfo)`
  grid-area: user;
`;

export const ScrapListSection = styled(ScrapList)`
  grid-area: scrap;
`;
