import SectionTitle from "./SectionTitle";
import UserInfo from "@/components/commons/UserInfo";
import styled from "styled-components";
import PositionChip from "@/components/commons/Chips/PositionChip";
import DESIGN_TOKEN from "@/styles/tokens";
import LeaderIcon from "./LeaderIcon";
import { TeamMemberApiResponseDto } from "@/lib/api/teamMember/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTeamMember } from "@/lib/api/teamMember";
import { ICONS } from "@/constants/icons";

interface MemberListProps {
  detailInfo: TeamMemberApiResponseDto["data"] | null | undefined;
}

export default function MemberList({ detailInfo }: MemberListProps) {
  const queryClient = useQueryClient();
  const handleOut = useMutation({
    mutationFn: (teamMemberId: number) => deleteTeamMember(teamMemberId),
    onSuccess: () => {
      console.log("요청 성공");
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleOutMember = (teamMemberId: number) => {
    handleOut.mutate(teamMemberId);
  };

  return (
    <Container>
      <SectionTitle title="현재 팀원" count={detailInfo?.length || 0} />
      <Members>
        {detailInfo?.map((info) => (
          <Box key={info.memberId}>
            <MemberWrapper>
              <UserInfo user={{ id: info.memberId, nickname: info.nickname, profileImageUrl: info.profileImageUrl }} />
              {info.isLeader && (
                <Leader>
                  <img src={ICONS.leader.src} alt={ICONS.leader.alt} />
                </Leader>
              )}
              <PositionChip label={info.position} />
            </MemberWrapper>
            <DeleteWrapper onClick={() => handleOutMember(info.teamMemberId)}>
              {!info.isLeader && <button>삭제</button>}
            </DeleteWrapper>
          </Box>
        ))}
      </Members>
    </Container>
  );
}

const { typography, mediaQueries, color } = DESIGN_TOKEN;

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
  position: relative;
`;

const DeleteWrapper = styled.div`
  ${typography.font16Medium}
  color: ${color.black[3]}
`;

const Leader = styled.div`
  position: absolute;
  top: 2.2rem;
  left: 2.2rem;
`;
