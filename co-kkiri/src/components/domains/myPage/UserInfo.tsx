import * as S from "./UserInfo.styled";
import ToggleButton from "@/components/commons/ToggleButton";
import UserProfileCard from "@/components/commons/UserProfileCard";
import { deleteUser, editVisibleProfileStatus } from "@/lib/api/myPage";
import { VisibleProfileStatusApiRequestDto } from "@/lib/api/myPage/type";
import { useUserInfoStore } from "@/stores/userInfoStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Navigate, useNavigate } from "react-router-dom";

interface UserInfoProps {
  visibleProfile: VisibleProfileStatusApiRequestDto;
}

export default function UserInfo({ visibleProfile }: UserInfoProps) {
  const user = useUserInfoStore();

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
    <S.Container>
      <UserProfileCard
        profileImageUrl={user.userInfo?.profileImageUrl || ""}
        nickname={user.userInfo?.nickname || ""}
        position={user.userInfo?.position}
        career={user.userInfo?.career}
        stack={user.userInfo?.stack || []}
        score={40}
        introduce={user.userInfo?.introduce}
        link={user.userInfo?.link}
        cardType="mypage"
      />
      <S.Box>
        <S.Scout>
          <ToggleButton
            content="스카우트 동의"
            onChange={() => handleEditVisibleProfile()}
            isChecked={visibleProfile.isVisibleProfile}
          />
        </S.Scout>
        <S.DeleteUser onClick={handleDeleteUser}>회원 탈퇴하기</S.DeleteUser>
      </S.Box>
    </S.Container>
  );
}
