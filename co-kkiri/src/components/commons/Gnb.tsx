import styled from "styled-components";
import category from "@/assets/icons/category.svg";
import logo from "@/assets/icons/logo.svg";
import profileImg from "@/assets/icons/profileImg.svg";
import DESIGN_TOKEN from "@/styles/tokens";
import { ROUTER_PATH } from "@/lib/path";

// 임시
interface User {
  nickname: string;
  profileImage: string;
}

interface GnbProps {
  user?: User;
  onCategoryClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onLoginClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onSignupClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Gnb({ user, onCategoryClick, onLoginClick, onSignupClick }: GnbProps) {
  const { POST_PATH, MY_PAGE } = ROUTER_PATH;
  return (
    <GnbWrapperStyled>
      <LeftGroupStyled>
        <button onClick={onCategoryClick}>
          <CategoryStyled src={category} alt="카테고리 버튼" />
        </button>
        <a href="/">
          <LogoStyled src={logo} alt="로고 버튼" />
        </a>
      </LeftGroupStyled>
      <RightGroupStyled>
        <StudyButtonStyled href={POST_PATH}>스터디 모집하기</StudyButtonStyled>
        {user ? (
          <UserInfoStyled>
            {user.profileImage ? (
              <img src={user.profileImage} alt="프로필 사진" />
            ) : (
              <img src={profileImg} alt="프로필 이미지 없을 때 사진" />
            )}
            <NicknameStyled href={MY_PAGE}>{user.nickname}</NicknameStyled>
          </UserInfoStyled>
        ) : (
          <div>
            <SignButtonStyled onClick={onLoginClick}>로그인</SignButtonStyled>/
            <SignButtonStyled onClick={onSignupClick}>회원가입</SignButtonStyled>
          </div>
        )}
      </RightGroupStyled>
    </GnbWrapperStyled>
  );
}
export default Gnb;

const { color, typography, mediaQueries, zIndex } = DESIGN_TOKEN;

const GnbWrapperStyled = styled.div`
  ${zIndex.sticky};
  position: sticky;
  background-color: ${color.white};
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${mediaQueries.desktop} {
    padding: 2.8rem 4rem;
  }
  ${mediaQueries.tablet} {
    padding: 2.8rem 3rem;
  }
  ${mediaQueries.mobile} {
    padding: 2.1rem 2rem;
  }
`;

const LeftGroupStyled = styled.div`
  display: flex;
  gap: 2rem;
`;

const CategoryStyled = styled.img``;

const LogoStyled = styled.img``;

const RightGroupStyled = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
`;

const StudyButtonStyled = styled.a`
  ${typography.font14Bold};
  color: ${color.primary[1]};
  ${mediaQueries.mobile} {
    display: none;
  }
`;

const SignButtonStyled = styled.button`
  ${typography.font14Medium}; // 변경
`;

const UserInfoStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const NicknameStyled = styled.a`
  ${typography.font14Medium}; // 변경
`;
