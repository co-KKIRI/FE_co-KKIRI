import ProjectChip, { ProjectType } from "@/components/commons/Chips/ProjectChip";
import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";
import ProjectDetailTable from "./ProjectDetailTable";

interface ProjectDetailCardProps {
    ProjectCategory: ProjectType;
}

export default function ProjectDetailCard({ProjectCategory}: ProjectDetailCardProps) {

    return <Container>
        <Box><ProjectChip label={ProjectCategory}/></Box>
        <ProjectDetailTable>
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