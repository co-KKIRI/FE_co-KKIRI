import ToggleButton from "@/components/commons/ToggleButton";
import UserProfileCard from "@/components/commons/UserProfileCard";
import { deleteUser, editVisibleProfileStatus, getVisibleProfileStatus } from "@/lib/api/myPage";
import { UserInfoApiResponseDto, VisibleProfileStatusApiRequestDto } from "@/lib/api/myPage/type";
import DESIGN_TOKEN from "@/styles/tokens";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

interface UserInfoProps {
  user: UserInfoApiResponseDto;
  visibleProfile: VisibleProfileStatusApiRequestDto;
}

export default function UserInfo({ user, visibleProfile }: UserInfoProps) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const editVisibleProfile = useMutation({
    mutationFn: (data: VisibleProfileStatusApiRequestDto) => editVisibleProfileStatus(data),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const deleteUserMutation = useMutation({
    mutationFn: () => deleteUser(),
    onSuccess: () => {
      queryClient.invalidateQueries();
      // navigate("/");
      console.log("요청 성공");
      // 콘솔은 잘 찍히는데 왜 회원 탈퇴가 안될까~
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleEditVisibleProfile = () => {
    editVisibleProfile.mutate({ isVisibleProfile: !visibleProfile.isVisibleProfile });
  };

  const handleDeleteUser = () => {
    deleteUserMutation.mutate();
  };

  return (
    <Container>
      <UserProfileCard
        nickname={user.nickname}
        position={user.position}
        career={user.career}
        stacks={user.stack}
        score={40}
        introduce={user.introduce}
        link={user.link}
        cardType="mypage"
      />
      <Box>
        <Scout>
          <ToggleButton
            content="스카우트 동의"
            onChange={() => handleEditVisibleProfile()}
            isChecked={visibleProfile.isVisibleProfile}
          />
        </Scout>
        <DeleteUser onClick={handleDeleteUser}>회원 탈퇴하기</DeleteUser>
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
