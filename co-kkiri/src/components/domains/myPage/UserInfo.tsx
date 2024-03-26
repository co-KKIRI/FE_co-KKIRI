import Button from "@/components/commons/Button";
import PositionChip from "@/components/commons/Chips/PositionChip";
import Stacks from "@/components/commons/Stacks";
import ToggleButton from "@/components/commons/ToggleButton";
import EditUserProfileModal from "@/components/modals/EditUserProfileModal";
import ModalPortal from "@/components/modals/ModalPortal";
import * as S from "@/components/modals/UserProfileModal/UserProfileModal.styled";
import { IMAGES } from "@/constants/images";
import { UserInfoApiResponseDto } from "@/lib/api/myPage/type";
import DESIGN_TOKEN from "@/styles/tokens";
import { useState } from "react";
import styled from "styled-components";

interface UserProfileProps {
  user: UserInfoApiResponseDto;
}

// 컴포넌트로 따로 분리하기
function UserProfile({ user }: UserProfileProps) {
  const [isEditUserProfileModal, setIsEditUserProfileModal] = useState(false);

  const handleOpenModal = () => {
    setIsEditUserProfileModal(!isEditUserProfileModal);
  };
  return (
    <Section>
      <S.Container>
        {user.profileImageUrl ? (
          <S.ProfileImg src={user.profileImageUrl} alt="프로필 이미지" />
        ) : (
          <img src={IMAGES.profileImgBig.src} alt={IMAGES.profileImgBig.alt} />
        )}
        <PositionChip label={user.position} />
        <S.ProfileBox>
          <S.ProfileWrapper>
            <S.Nickname>{user.nickname}</S.Nickname>
            <S.Career>{user.career ? `경력 ${user.career}년차` : "경력을 아직 작성하지 않았어요!"}</S.Career>
          </S.ProfileWrapper>
          <Stacks stacks={user.stacks} />
          <S.Introduce>{user.introduce ? user.introduce : "한줄소개를 아직 작성하지 않았어요!"}</S.Introduce>
        </S.ProfileBox>
        <S.LinkBox>
          <S.LinkWrapper>
            {user.link ? (
              <a key={user.link} href={user.link} target="_blank" rel="noopner noreferrer">
                {user.link}
              </a>
            ) : (
              "링크없음"
            )}
          </S.LinkWrapper>
        </S.LinkBox>
        <Button variant="ghost" onClick={handleOpenModal}>
          수정하기
        </Button>
      </S.Container>
      {isEditUserProfileModal && (
        <ModalPortal>
          <EditUserProfileModal onClose={handleOpenModal} />
        </ModalPortal>
      )}
    </Section>
  );
}

const { typography, color, mediaQueries } = DESIGN_TOKEN;

const Section = styled.div`
  background-color: ${color.white};
  width: 43rem;
  height: 50.6rem;
  border-radius: 1rem;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
  padding: 4.1rem 3rem 3rem;
  ${mediaQueries.mobile} {
    width: 32rem;
    height: 50.6rem;
  }
`;

interface UserInfoProps {
  user: UserInfoApiResponseDto;
}

export default function UserInfo({ user }: UserInfoProps) {
  const [isChecked, setIsChecked] = useState(user.isVisibleProfile);

  const handleIsVisibleProfile = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Container>
      <UserProfile user={user} />
      <Box>
        <Scout>
          <ToggleButton content="스카우트 동의" onChange={handleIsVisibleProfile} isChecked={isChecked} />
        </Scout>
        <DeleteUser>회원 탈퇴하기</DeleteUser>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  width: 43rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  ${mediaQueries.mobile} {
    width: 32rem;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 43rem;
  ${mediaQueries.mobile} {
    width: 32rem;
  }
`;

const Scout = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const DeleteUser = styled.button`
  ${typography.font14Semibold}
  color: ${color.gray[1]};
`;
