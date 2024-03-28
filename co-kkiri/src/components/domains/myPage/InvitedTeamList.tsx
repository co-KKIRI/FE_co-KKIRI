import SectionTitle from "../manage/SectionTitle";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import { InvitedTeamListApiResponseDto } from "@/lib/api/myPage/type";
import NoResultText from "@/components/commons/NoResultText";

interface InvitedTeamListProps {
  teamList: InvitedTeamListApiResponseDto["data"];
  count: number;
}

export default function InvitedTeamList({ count, teamList }: InvitedTeamListProps) {
  return (
    <Container>
      <SectionTitle title="스터디/프로젝트 초대된 목록" count={count} lineLength="mypage" />
      <Box>
        {teamList?.map((team) => <TeamTitle key={team.teamInviteId}>{team.postTitle}</TeamTitle>)}
        {count === 0 && <NoResultText text="초대된 스터디/프로젝트가 없어요" padding={60} color="gray" />}
      </Box>
    </Container>
  );
}

const { typography, color, mediaQueries } = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 35rem;

  ${mediaQueries.tablet} {
    width: 70.8rem;
  }

  ${mediaQueries.mobile} {
    width: 32rem;
  }
`;

const TeamTitle = styled.div`
  ${typography.font16Semibold}
  color: ${color.black[3]};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
