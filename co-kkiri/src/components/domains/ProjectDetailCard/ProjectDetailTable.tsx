import styled from "styled-components";

interface ProjectDetailTableProps {
    children: React.ReactNode;
}

export default function ProjectDetailTable({children}: ProjectDetailTableProps) {
    return <Container>{children}</Container>;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`