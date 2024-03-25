import styled from "styled-components";
import { ICONS } from "@/constants/icons";
import DESIGN_TOKEN from "@/styles/tokens";
import ProjectDetailCard from "@/components/commons/ProjectDetailCard";
import { StudyManagementApiResponseDto } from "@/lib/api/post/type";

interface DetailProps {
  detailInfo: StudyManagementApiResponseDto;
}

export default function Detail({ detailInfo }: DetailProps) {
  const { postTitle, type, recruitEndAt, progressPeriod, progressWay, contactWay, capacity, positions, stacks } =
    detailInfo;

  return (
    <Container>
      <Box>
        <InfoWrapper>
          <p>스터디/프로젝트 정보</p>
          <img src={ICONS.arrowRightGray.src} alt={ICONS.arrowRightGray.alt} />
        </InfoWrapper>
        <Title>{postTitle}</Title>
      </Box>

      <ProjectDetailCard
        type="mystudy"
        ProjectCategory={type}
        recruitEndAt={recruitEndAt}
        progressPeriod={progressPeriod}
        positions={positions}
        progressWay={progressWay}
        contactWay={contactWay}
        capacity={capacity}
        stacks={stacks}
      />
    </Container>
  );
}

const { typography, color, mediaQueries } = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  height: fit-content;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
`;

const InfoWrapper = styled.div`
  ${typography.font16Bold}
  display: flex;
  gap: 0.4rem;
  color: ${color.gray[1]};
`;

const Title = styled.div`
  ${typography.font24Bold}
  color: ${color.black[2]};
  width: 50rem;

  ${mediaQueries.tablet} {
    width: 32rem;
  }

  ${mediaQueries.mobile} {
    width: 32rem;
  }
`;
