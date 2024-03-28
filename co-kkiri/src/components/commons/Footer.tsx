import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <LinkBox>
        <Link href="/">코끼리 소개</Link>
        <Link href="/">이용약관</Link>
        <Link href="/">개인정보처리방침</Link>
      </LinkBox>
      <p>© 2024 COKKIRI</p>
    </Container>
  );
}

const { typography, color } = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  justify-content: flex-start;

  p {
    ${typography.font12Regular}
    color: ${color.black[3]}
  }
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: flex-start;
  justify-content: flex-start;
`;

// 코끼리 소개를 페이지로 따로 만들 것인지? => Link to
// 아니면 노션같은 문서에 작성할 것인지? => a
const Link = styled.a`
  ${typography.font12Regular}
  color: ${color.black[3]}
`;
