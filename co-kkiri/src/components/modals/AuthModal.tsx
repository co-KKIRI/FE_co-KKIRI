import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";
import ModalLayout from "./ModalLayout";
import { IMAGES } from "@/constants/images";
import { Link } from "react-router-dom";

export default function AuthModal() {
  return (
    <ModalLayout desktopWidth={55.8} mobileWidth={32}>
      <Container>
        <Link to="/">
          <Logo src={IMAGES.logo.src} alt={IMAGES.logo.src} />
        </Link>
        <span>로그인 / 회원가입</span>
        <LoginButtonBox>
          <LoginButton padding={0.9}>
            <img src={IMAGES.googleLogo.src} alt={IMAGES.googleLogo.alt} />
          </LoginButton>
          <LoginButton padding={1.3}>
            <img src={IMAGES.githubLogo.src} alt={IMAGES.githubLogo.alt} />
          </LoginButton>
        </LoginButtonBox>
      </Container>
    </ModalLayout>
  );
}

const { color, mediaQueries, typography } = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 2.2rem;
  padding-bottom: 6rem;

  & span {
    ${typography.font16Bold};
    line-height: 130%;
    color: ${color.black[3]};
    padding: 2rem 0 4rem 0;
  }
`;

const Logo = styled.img`
  width: 17.8rem;
  cursor: pointer;
`;

const LoginButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  ${mediaQueries.mobile} {
    gap: 0.8rem;
  }
`;

const LoginButton = styled.div<{ padding: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7.2rem;
  height: 7.2rem;
  box-shadow: 0 0.4rem 2rem 0 rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  cursor: pointer;

  ${mediaQueries.mobile} {
    width: 5.6rem;
    height: 5.6rem;
    padding: ${(props) => props.padding}rem;
  }
`;
