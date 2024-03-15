import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import UserInfo from "@/components/commons/UserInfo";
import PostManagementButtons from "./PostManagementButtons";
import Count from "@/components/commons/Count";
import { ICONS } from "@/constants/icons";
import { studyDetailData } from "@/lib/mock/studyDetail";

const {
  result: {
    postTitle, //제목
    postContent, //내용
    userProfileImg: profileImage, //작성자 프로필이미지
    userNickname: nickname, //작성자 닉네임
    createdAt, //생성 시간 YYYY-M.-D.
    views, //조회수
    scraps, //스크랩수
  },
} = studyDetailData;

const userInfo = { nickname, profileImage };

export default function RecruitmentPost() {
  return (
    <Container>
      <Title>{postTitle}</Title>
      <Box>
        <PostInfoWrapper>
          <UserInfo user={userInfo} nicknameBold />
          <InfoDivider />
          <CreatedDate>2024.3.5</CreatedDate> {/* createdAt 데이터 확인후 변경 */}
        </PostInfoWrapper>
        <PostManagementButtons />
      </Box>
      <Content>{postContent}</Content>
      <CountWrapper>
        <Count icon={ICONS.eye} count={views} />
        <Count icon={ICONS.scrapEmpty} count={scraps} />
      </CountWrapper>
    </Container>
  );
}

const {
  color,
  typography: { font24Bold, font14Semibold, font16Medium },
  mediaQueries,
} = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${mediaQueries.desktop} {
    width: 50rem;
  }

  ${mediaQueries.tablet} {
    width: 50rem;
  }

  ${mediaQueries.mobile} {
    width: 32rem;
  }
`;

const Title = styled.div`
  ${font24Bold}
  color:${color.black[1]};
  width: 100%;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const PostInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const CreatedDate = styled.span`
  ${font14Semibold}
  color:${color.gray[1]}
`;

const InfoDivider = styled.div`
  width: 0.1rem;
  height: 0.8rem;
  flex-shrink: 0;
  background: ${color.gray[2]};
`;

const Content = styled.div`
  ${font16Medium}
  color:${color.black[2]};
  width: 100%;
  margin-top: 1rem;
`;
const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;
