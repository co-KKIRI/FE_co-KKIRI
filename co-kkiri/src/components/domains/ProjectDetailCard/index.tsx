import ProjectChip, { ProjectType } from "@/components/commons/Chips/ProjectChip";
import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";
import ProjectDetailTable from "./ProjectDetailTable";
import { ProjectDetailConfig, ProjectDetailContentType } from "./types";
import ProjectDetailRow from "./ProjectDetailRow";

interface ProjectDetailCardProps extends ProjectDetailContentType {
    ProjectCategory: ProjectType;
}


export default function ProjectDetailCard({ ProjectCategory, ...projectDetailContents }: ProjectDetailCardProps) {

    // 이 친구가 여기 있으면 안될 것 같은데 추후에 코드를 수정해서 밖으로 빼던 해야할 듯 합니다
    const projectDetailConfig: ProjectDetailConfig = {
        'recruitEndAt': {
            "label": "모집 마감",
            "content": projectDetailContents.recruitEndAt,
            "renderType": "text",
        },
        'progressPeriod':{
            "label": "진행 기간",
            "content": projectDetailContents.progressPeriod,
            "renderType": "text",
        },
        'progressWay':{
            "label": "진행 방식",
            "content": projectDetailContents.progressWay,
            "renderType": "text",
        },
        'contactWay':{
            "label": "연락 방식",
            "content": projectDetailContents.contactWay,
            "renderType": "text",
        },
        'capacity':{
            "label": "모집 인원",
            "content": projectDetailContents.capacity,
            "renderType": "text",
        },
        'positions':{
            "label": "모집 포지션",
            "content": projectDetailContents.positions,
            "renderType": "positionChip",
        },
        'stacks':{
            "label": "기술 스택",
            "content": projectDetailContents.stacks,
            "renderType": "stackIcon",
        }
    }

    return <Container>
        <Box><ProjectChip label={ProjectCategory} /></Box>
        <ProjectDetailTable>
            {Object.values(projectDetailConfig).map((value) => {
                return <ProjectDetailRow {...value} />
            })}
        </ProjectDetailTable>
    </Container>;
}

const { color, boxShadow, mediaQueries } = DESIGN_TOKEN;

const Container = styled.div`
    height: fit-content;

    padding: 8rem 3rem 3rem;
    position: relative;

    background-color: ${color.white};

    border-radius: 1.5rem;
    box-shadow: ${boxShadow.content};

    ${mediaQueries.mobile}{
        width: 32rem;
    }

    ${mediaQueries.tablet}{
        width: 50rem;
    }

    ${mediaQueries.desktop}{
        width: 35rem;
    }
`

const Box = styled.div`
    position: absolute;
    top: 3rem;
    left: -0.2rem;
    width: fit-content;
    height: fit-content;
`