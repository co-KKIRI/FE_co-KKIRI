import styled from "styled-components";
import Share from "@/components/domains/detail/Share";
import Scrap from "@/components/commons/Scrap";

interface ShareAndScrapProps {
  isScraped: boolean;
  className?: string;
}

export default function ShareAndScrap({ isScraped, className }: ShareAndScrapProps) {
  return (
    <Container className={className}>
      <Share />
      <Scrap isScraped={isScraped} width={42} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;
