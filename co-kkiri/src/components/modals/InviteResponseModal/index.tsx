import * as S from "./InviteResponseModal.styled";
import ModalLayout from "../ModalLayout";
import UserInfo from "../../commons/UserInfo";
import Button from "../../commons/Button";
import { ICONS } from "@/constants/icons";
import { Link } from "react-router-dom";

interface InviteResponseModalProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const user = {
  nickname: "코끼리",
  profileImageUrl: "",
};

export default function InviteResponseModal({ onClick }: InviteResponseModalProps) {
  return (
    <ModalLayout desktopWidth={430} mobileWidth={320} onClick={onClick} onClose={() => {}}>
      <S.Container>
        <h1>초대 메세지</h1>
        <S.ContentContainer>
          <S.SenderInfoBox>
            <h6>초대자</h6>
            <UserInfo user={user} />
          </S.SenderInfoBox>
          <S.ContentBox>
            <Link to="">
              <h6>
                스터디/프로젝트
                <img src={ICONS.arrowRightGray.src} alt={ICONS.arrowRightGray.alt} />
              </h6>
            </Link>
            <p>실제 사용할 쇼핑몰 웹프로젝트 만들어나가실 분 구합니다. 쇼핑몰 사장</p>
          </S.ContentBox>
          <S.MessageBox>
            <h6>초대 메시지</h6>
            <p>
              안녕하세요. 프론트엔드 개발자 코끼리입니다. 프로젝트에 함께하고 싶습니다. 감사합니다. 안녕하세요.
              프론트엔드 개발자 코끼리입니다. 프로젝트에 함께하고 싶습니다. 감사합니다. 안녕하세요.
            </p>
          </S.MessageBox>
          <S.SubmitButtonBox>
            <Button type="submit" variant="red">
              거절하기
            </Button>
            <Button type="submit" variant="primary">
              수락하기
            </Button>
          </S.SubmitButtonBox>
        </S.ContentContainer>
      </S.Container>
    </ModalLayout>
  );
}
