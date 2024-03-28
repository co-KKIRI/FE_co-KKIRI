import styled from "styled-components";
import UserProfileCardLayout from "./UserProfileCardLayout";
import DESIGN_TOKEN from "@/styles/tokens";
import { UserInfoApiResponseDto } from "@/lib/api/myPage/type";

interface UserProfileCardProps extends UserInfoApiResponseDto {
  score: number;
  cardType?: "mypage" | "scout";
}

export default function UserProfileCard(props: UserProfileCardProps) {
  return (
    <Container>
      <UserProfileCardLayout {...props} />
    </Container>
  );
}

const { boxShadow } = DESIGN_TOKEN;

const Container = styled.div`
  width: 100%;
  min-width: fit-content;

  padding: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 2rem;
  box-shadow: ${boxShadow.content};
`;
