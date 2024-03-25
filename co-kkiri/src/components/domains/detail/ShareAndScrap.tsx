import styled from "styled-components";
import Share from "@/components/domains/detail/Share";
import CardCornerButton from "@/components/commons/CardCornerButton";

interface ShareAndScrapProps {
  isScrapped: boolean;
  className?: string;
}

export default function ShareAndScrap({ isScrapped, className }: ShareAndScrapProps) {
  return (
    <Container className={className}>
      <Share />
      <ScrapSection isScrapped={isScrapped} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const ScrapSection = styled(CardCornerButton)`
  img {
    width: 4.2rem;
  }
`;
