import ProjectChip from "@/components/commons/Chips/ProjectChip";
import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";
import ProjectDetailTable from "./ProjectDetailTable";
import { ProjectDetailConfig, ProjectDetailContentType } from "./types";
import ProjectDetailRow from "./ProjectDetailRow";
import { CategoryList } from "@/types/categoryTypes";

interface ProjectDetailCardProps extends ProjectDetailContentType {
  type?: "mystudy";
  ProjectCategory: CategoryList;
}

export default function ProjectDetailCard({ type, ProjectCategory, ...projectDetailContents }: ProjectDetailCardProps) {
  // 이 친구가 여기 있으면 안될 것 같은데 추후에 코드를 수정해서 밖으로 빼던 해야할 듯 합니다
  const projectDetailConfig: ProjectDetailConfig = {
    recruitEndAt: {
      label: "모집 마감",
      content: projectDetailContents.recruitEndAt,
      renderType: "text",
    },
    progressPeriod: {
      label: "진행 기간",
      content: projectDetailContents.progressPeriod,
      renderType: "text",
    },
    progressWay: {
      label: "진행 방식",
      content: projectDetailContents.progressWay,
      renderType: "text",
    },
    contactWay: {
      label: "연락 방식",
      content: projectDetailContents.contactWay,
      renderType: "text",
    },
    capacity: {
      label: "모집 인원",
      content: projectDetailContents.capacity,
      renderType: "capacity",
    },
    positions: {
      label: "모집 포지션",
      content: projectDetailContents.positions,
      renderType: "positions",
    },
    stacks: {
      label: "기술 스택",
      content: projectDetailContents.stacks,
      renderType: "stacks",
    },
  };

  return (
    <Container type={type}>
      <Box>
        <ProjectChip label={ProjectCategory} />
      </Box>
      <ProjectDetailTable>
        {Object.values(projectDetailConfig).map((value) => {
          return <ProjectDetailRow key={value.label} {...value} />;
        })}
      </ProjectDetailTable>
    </Container>
  );
}

const { color, boxShadow, mediaQueries } = DESIGN_TOKEN;

const Container = styled.div<{ type?: string }>`
  height: fit-content;

  padding: 8rem 3rem 3rem;
  position: relative;

  background-color: ${color.white};

  border-radius: 1.5rem;
  box-shadow: ${boxShadow.content};
  width: ${({ type }) => (type === "mystudy" ? "50rem" : "35rem")};

  ${mediaQueries.tablet} {
    width: ${({ type }) => (type === "mystudy" ? "32rem" : "50rem")};
  }

  ${mediaQueries.mobile} {
    width: 32rem;
  }
`;

const Box = styled.div`
  position: absolute;
  top: 3rem;
  left: -0.2rem;
  width: fit-content;
  height: fit-content;
`;
