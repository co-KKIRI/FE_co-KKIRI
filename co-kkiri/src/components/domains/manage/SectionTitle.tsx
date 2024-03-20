import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

interface SectionTitleProps {
  title: string;
  count: number;
}

export default function SectionTitle({ title, count }: SectionTitleProps) {
  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <Count>{count}</Count>
      </Wrapper>
      <Line />
    </Container>
  );
}

const { typography, color, mediaQueries } = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const Wrapper = styled.div`
  ${typography.font20Bold}
  display: flex;
  gap: 0.8rem;
`;

const Title = styled.div`
  color: ${color.black[1]};
`;

const Count = styled.div`
  color: ${color.primary[1]};
`;

const Line = styled.div`
  background-color: ${color.gray[2]};
  width: 28.8rem;
  height: 0.1rem;

  ${mediaQueries.desktop} {
    width: 35rem;
  }
`;
