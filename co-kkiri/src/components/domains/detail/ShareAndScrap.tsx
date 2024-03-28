import styled from "styled-components";
import Share from "@/components/domains/detail/Share";
import CardCornerButton from "@/components/commons/CardCornerButton";

interface ShareAndScrapProps {
  isScraped: boolean;
  className?: string;
  postId: number;
}

export default function ShareAndScrap({ isScraped, className, postId }: ShareAndScrapProps) {
  return (
    <Container className={className}>
      <Share />
      <ScrapSection isScraped={isScraped} postId={postId} />
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
