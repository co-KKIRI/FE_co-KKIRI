import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import Detail from "@/components/domains/manage/Detail";
import Buttons from "@/components/domains/manage/Buttons";

const { mediaQueries } = DESIGN_TOKEN;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 9.1rem 0;

  ${mediaQueries.mobile} {
    padding: 5.1rem 0;
  }
`;

export const Box = styled.div`
  row-gap: 3rem;
  display: grid;
  column-gap: 6rem;
  grid-template:
    "detail list"
    "button list";

  ${mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8.1rem;
  }
`;

export const DetailSection = styled(Detail)`
  grid-area: detail;
`;

export const ListSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  grid-area: list;
`;

export const ButtonSection = styled(Buttons)`
  grid-area: button;
`;
