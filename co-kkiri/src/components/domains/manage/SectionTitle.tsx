import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

interface SectionTitleProps {
  title: string;
  count?: number;
  type?: "cardList";
  lineLength?: "mypage";
}

export default function SectionTitle({ title, count, type, lineLength }: SectionTitleProps) {
  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <Count>{count}</Count>
      </Wrapper>
      {type === "cardList" || <Line $lineLength={lineLength === "mypage"} />}
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

const Line = styled.div<{ $lineLength?: boolean }>`
  background-color: ${color.gray[2]};
  height: 0.1rem;
  width: ${({ $lineLength }) => ($lineLength ? "32rem" : "28.8rem")};
  ${mediaQueries.desktop} {
    width: 35rem;
  }

  ${mediaQueries.tablet} {
    width: ${({ $lineLength }) => $lineLength && "70.8rem"};
  }
`;
