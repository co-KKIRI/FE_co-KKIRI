import DESIGN_TOKEN from "@/styles/tokens";
import SectionTitle from "../manage/SectionTitle";
import styled from "styled-components";

export default function TagList() {
  return (
    <Container>
      <SectionTitle title="내가 받은 태그" lineLength="mypage" />
    </Container>
  );
}

const { mediaQueries } = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 35rem;

  ${mediaQueries.tablet} {
    width: 70.8rem;
  }

  ${mediaQueries.mobile} {
    width: 32rem;
  }
`;
