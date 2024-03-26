import SectionTitle from "./SectionTitle";
import UserInfo from "@/components/commons/UserInfo";
import styled from "styled-components";
import PositionChip from "@/components/commons/Chips/PositionChip";
import DESIGN_TOKEN from "@/styles/tokens";
import { ICONS } from "@/constants/icons";
import { AppliedMemberListApiResponseDto } from "@/lib/api/post/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { acceptMember, rejectMember } from "@/lib/api/teamMember";

interface AppliedListProps {
  detailInfo: AppliedMemberListApiResponseDto["data"] | null | undefined;
}

export default function AppliedList({ detailInfo }: AppliedListProps) {
  const queryClient = useQueryClient();
  const handleAccept = useMutation({
    mutationFn: (teamMemberId: number) => acceptMember(teamMemberId),
    onSuccess: () => {
      console.log("요청 성공");
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleAcceptMember = (teamMemberId: number) => {
    handleAccept.mutate(teamMemberId);
  };

  const handleReject = useMutation({
    mutationFn: (teamMemberId: number) => rejectMember(teamMemberId),
    onSuccess: () => {
      console.log("요청 성공");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleRejectMember = (teamMemberId: number) => {
    handleReject.mutate(teamMemberId);
  };

  return (
    <Container>
      <SectionTitle title="신청 목록" count={detailInfo?.length || 0} />
      <Members>
        {detailInfo?.map((info) => (
          <Box key={info.memberId}>
            <MemberWrapper>
              <UserInfo user={{ id: info.memberId, nickname: info.nickname, profileImageUrl: info.profileImageUrl }} />
              <PositionChip label={info.position} />
            </MemberWrapper>
            <AcceptWrapper>
              <button onClick={() => handleAcceptMember(info.teamMemberId)}>
                <img src={ICONS.accept.src} alt={ICONS.accept.alt} />
              </button>
              <button onClick={() => handleRejectMember(info.teamMemberId)}>
                <img src={ICONS.reject.src} alt={ICONS.reject.alt} />
              </button>
            </AcceptWrapper>
          </Box>
        ))}
      </Members>
    </Container>
  );
}

const { mediaQueries } = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 35rem;

  ${mediaQueries.tablet} {
    width: 28.8rem;
  }

  ${mediaQueries.mobile} {
    width: 28.8rem;
  }
`;

const Members = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MemberWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

const AcceptWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
`;
