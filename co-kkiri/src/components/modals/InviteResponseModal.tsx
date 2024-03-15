import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";
import ModalLayout from "./ModalLayout";
import { IMAGES } from "@/constants/images";
import { Link } from "react-router-dom";
import { ROUTER_PATH } from "@/lib/path";
import UserInfo from "../commons/UserInfo";

interface InviteResponseModalProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const user = {
  nickname: "코끼리",
  profileImage: "",
};
export default function InviteResponseModal({ onClick }: InviteResponseModalProps) {
  return (
    <ModalLayout desktopWidth={430} mobileWidth={320} onClick={onClick}>
      <Container>
        <h1>초대메세지</h1>
        <SenderInfoBox>
          <div>초대자</div>
          <UserInfo user={user} />
        </SenderInfoBox>
        <ContentBox>
          <h6>
            스터디/프로젝트
            <img />
          </h6>
          <p>실제 사용할 쇼핑몰 웹프로젝트 만들어나가실 분 구합니다. 쇼핑몰 사장</p>
        </ContentBox>
        <MessageBox>
          <h6>초대 메시지</h6>
          <p>
            안녕하세요. 프론트엔드 개발자 코끼리입니다. 프로젝트에 함께하고 싶습니다. 감사합니다. 안녕하세요. 프론트엔드
            개발자 코끼리입니다. 프로젝트에 함께하고 싶습니다. 감사합니다. 안녕하세요.
          </p>
        </MessageBox>
      </Container>
    </ModalLayout>
  );
}

// const { color, mediaQueries, typography } = DESIGN_TOKEN;

const Container = styled.div`
  & h1 {
  }
`;

const SenderInfoBox = styled.div``;

const ContentBox = styled.div``;
const MessageBox = styled.div``;
