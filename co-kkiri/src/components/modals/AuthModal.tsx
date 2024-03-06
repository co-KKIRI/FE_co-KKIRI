import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";
import googleButton from "@/assets/images/google_logo.svg";
import gitHubButton from "@/assets/images/github_logo.svg";
import logo from "@/assets/images/logo.svg";
import ModalLayout from "./ModalLayout";

const { color } = DESIGN_TOKEN;

export default function AuthModal() {
  return (
    <ModalLayout>
      <Layout>
        <img src={logo} />
        <span>로그인 / 회원가입</span>
        <LoginButtons>
          <LoginButton>
            <img src={googleButton} alt="구글 로그인 버튼" />
          </LoginButton>
          <LoginButton>
            <img src={gitHubButton} alt="깃허브 로그인 버튼" />
          </LoginButton>
        </LoginButtons>
      </Layout>
    </ModalLayout>
  );
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 2.2rem;
  padding-bottom: 6rem;

  & span {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 130%;
    color: ${color.black[100]};
    padding: 2rem 0 4rem 0;
  }
`;

const LoginButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;

const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7.2rem;
  height: 7.2rem;
  box-shadow: 0 0.4rem 2rem 0 rgba(0, 0, 0, 0.1);
  border-radius: 50%;
`;
