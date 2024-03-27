import Button from "@/components/commons/Button";
import { IMAGES } from "@/constants/images";
import DESIGN_TOKEN from "@/styles/tokens";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={IMAGES.logo404.src} alt={IMAGES.logo404.alt} />
      <Box>
        <Wrapper>
          <Title>404 ERROR</Title>
          <Description>
            페이지를 찾을 수 없습니다. <br />
            올바른 URL을 입력하였는지 확인해주세요.
          </Description>
        </Wrapper>
        <Button variant="ghost" width={240} onClick={() => navigate("/")}>
          메인으로 돌아가기
        </Button>
      </Box>
    </Container>
  );
}

const { color, typography } = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  padding: 20rem 0 35.9rem;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${color.primary[1]};
  font-size: 3.2rem;
  font-weight: 700;
`;

const Description = styled.p`
  ${typography.font16Medium}
  color: ${color.black[1]};
  text-align: center;
`;
