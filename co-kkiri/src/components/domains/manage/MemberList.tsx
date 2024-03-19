import SectionTitle from "./SectionTitle";
import UserInfo from "@/components/commons/UserInfo";
import styled from "styled-components";
import PositionChip from "@/components/commons/Chips/PositionChip";
import DESIGN_TOKEN from "@/styles/tokens";
import { postTeamMemberData } from "@/lib/mock/manage/postTeamMember";
import LeaderIcon from "./LeaderIcon";

export default function MemberList() {
  const detailInfo = postTeamMemberData.result.postTeamMemberList;
  return (
    <Container>
      <SectionTitle title="현재 팀원" count={detailInfo.length} />
      <Members>
        {detailInfo.map((info) => (
          <Box key={info.memberId}>
            <MemberWrapper>
              <UserInfo user={{ nickname: info.nickname, profileImageUrl: info.profileImageUrl }} />
              {info.isLeader && (
                <Leader>
                  <LeaderIcon />
                </Leader>
              )}
              <PositionChip label={info.position} />
            </MemberWrapper>
            <DeleteWrapper>{info.isLeader || <button>삭제</button>}</DeleteWrapper>
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
  width: 28.8rem;

  ${mediaQueries.desktop} {
    width: 35rem;
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