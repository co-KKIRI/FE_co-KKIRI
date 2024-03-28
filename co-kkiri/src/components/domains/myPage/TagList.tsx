import DESIGN_TOKEN from "@/styles/tokens";
import SectionTitle from "../manage/SectionTitle";
import styled from "styled-components";
import NoResultText from "@/components/commons/NoResultText";

export default function TagList() {
  return (
    <Container>
      <SectionTitle title="내가 받은 태그" lineLength="mypage" />
      <NoResultText text="아직 받은 태그가 없어요." padding={60} color="gray" />
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
