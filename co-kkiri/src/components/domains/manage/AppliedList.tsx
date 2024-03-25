import { appliedMemberData } from "@/lib/mock/manage/appliedMember";
import SectionTitle from "./SectionTitle";
import UserInfo from "@/components/commons/UserInfo";
import styled from "styled-components";
import PositionChip from "@/components/commons/Chips/PositionChip";
import DESIGN_TOKEN from "@/styles/tokens";
import { ICONS } from "@/constants/icons";

export default function AppliedList() {
  const detailInfo = appliedMemberData.result.appliedPostMemberList;
  return (
    <Container>
      <SectionTitle title="신청 목록" count={detailInfo.length} />
      <Members>
        {detailInfo.map((info) => (
          <Box key={info.memberId}>
            <MemberWrapper>
              <UserInfo user={{ nickname: info.nickname, profileImageUrl: info.profileImageUrl }} />
              <PositionChip label={info.position} />
            </MemberWrapper>
            <AcceptWrapper>
              <button>
                <img src={ICONS.accept.src} alt={ICONS.accept.alt} />
              </button>
              <button>
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
  width: 28.8rem;

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
