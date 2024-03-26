import ToggleButton from "@/components/commons/ToggleButton";
import UserProfileCard from "@/components/commons/UserProfileCard";
import { UserInfoApiResponseDto } from "@/lib/api/myPage/type";
import DESIGN_TOKEN from "@/styles/tokens";
import { useState } from "react";
import styled from "styled-components";

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
      <UserProfileCard
        nickname={user.nickname}
        position={user.position}
        career={user.career}
        stacks={user.stacks}
        score={40}
        introduce={user.introduce}
        link={user.link}
        cardType="mypage"
      />
      <Box>
        <Scout>
          <ToggleButton content="스카우트 동의" onChange={handleIsVisibleProfile} isChecked={isChecked} />
        </Scout>
        <DeleteUser>회원 탈퇴하기</DeleteUser>
      </Box>
    </Container>
  );
}

const { typography, color, mediaQueries } = DESIGN_TOKEN;

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
