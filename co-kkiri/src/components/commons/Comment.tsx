import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";
import UserInfo from "./UserInfo";

interface UserInfo {
  nickname: string;
  profileImage: string;
}

interface CommentProps {
  commentUser: UserInfo;
  commentDate: string;
  comment: string;
}
/**
 * 댓글을 남긴 유저의 정보, 날짜, 댓글을 받는 댓글창 컴포넌트
 * @property {object} commentUser 댓글을 남긴 유저
 * @property {string} commentDate 댓글을 남긴 날짜
 * @property {string} comment 댓글 본문
 */
export default function Comment({ commentUser, commentDate, comment }: CommentProps) {
  return (
    <Container>
      <Wrapper>
        <UserInfo user={commentUser} />
        <ColumnDivider />
        <Date>{commentDate}</Date>
      </Wrapper>
      <Text>{comment}</Text>
      <HorizontalDivider />
    </Container>
  );
}

const {
  color,
  typography: { font16Medium, font14Semibold },
  mediaQueries: { desktop, tablet, mobile },
} = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.2rem;

  ${desktop} {
    width: 50rem;
  }
  ${tablet} {
    width: 35rem;
  }
  ${mobile} {
    width: 32rem;
  }
`;

const Date = styled.div`
  color: ${color.gray[1]};
  ${font14Semibold}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const Text = styled.div`
  color: ${color.black[2]};
  ${font16Medium}
`;

const ColumnDivider = styled.div`
  width: 0.1rem;
  height: 0.8rem;
  flex-shrink: 0;
  background: ${color.gray[2]};
`;

const HorizontalDivider = styled.div`
  width: 100%;
  height: 0.1rem;
  background: ${color.gray[2]};
  margin-top: 0.4rem;
`;
