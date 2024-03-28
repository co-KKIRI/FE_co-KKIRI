import UserProfileCard from "@/components/commons/UserProfileCard";
import styled from "styled-components";
import { SearchedMemberProfile } from "@/lib/api/member/type";
import useResponsiveSidebar from "@/hooks/useResponsiveSideBar";
import DESIGN_TOKEN from "@/styles/tokens";

interface ScoutCardsProps {
  userProfiles: SearchedMemberProfile[];
}

export default function ScoutCards({ userProfiles }: ScoutCardsProps) {
  const isSidebarOpenNarrow = useResponsiveSidebar();

  return (
    <Container>
      {userProfiles.length === 0 ? (
        <NoResultText $isSidebarOpenNarrow={isSidebarOpenNarrow}>검색 결과가 없어요.</NoResultText>
      ) : (
        <Wrapper $isSidebarOpenNarrow={isSidebarOpenNarrow}>
          {userProfiles?.map(({ memberId, profileImageUrl, nickname, position, career, stacks: stacks, score }) => (
            <UserProfileCard
              key={memberId}
              profileImageUrl={profileImageUrl}
              nickname={nickname}
              position={position}
              career={career}
              stack={stacks}
              score={score}
              cardType="scout"
            />
          ))}
        </Wrapper>
      )}
    </Container>
  );
}

const { mediaQueries, color } = DESIGN_TOKEN;

const Container = styled.div`
  margin-top: 4rem;
  margin-bottom: 5.5rem;

  ${mediaQueries.tablet} {
    margin-top: 3rem;
  }

  ${mediaQueries.mobile} {
    margin-top: 5.2rem;
  }
`;

const Wrapper = styled.div<{ $isSidebarOpenNarrow: boolean }>`
  display: grid;
  flex-wrap: wrap;
  gap: 2rem;
  grid-template-columns: repeat(4, 26.5rem);
  ${({ $isSidebarOpenNarrow }) => $isSidebarOpenNarrow && `grid-template-columns: repeat(3, 29rem);`}

  ${mediaQueries.tablet} {
    grid-template-columns: repeat(2, 34.6rem);
    gap: 1.6rem;
  }

  ${mediaQueries.mobile} {
    grid-template-columns: repeat(1, 32rem);
    gap: 2rem;
  }
`;

const NoResultText = styled.p<{ $isSidebarOpenNarrow: boolean }>`
  font-size: 1.2rem;
  color: ${color.black};
  text-align: center;
  margin-top: 2rem;
  width: 112rem;
  ${({ $isSidebarOpenNarrow }) => $isSidebarOpenNarrow && `width: 76.8rem;`}

  ${mediaQueries.tablet} {
    width: 76.8rem;
  }

  ${mediaQueries.mobile} {
    width: 34rem;
  }
`;
