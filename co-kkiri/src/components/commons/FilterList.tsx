import DESIGN_TOKEN from "@/styles/tokens";
import { MouseEvent } from "react";
import styled from "styled-components";

interface FilterListProps {
    filters: string[];
    onFilterClick(filter: string): void;
}

export default function FilterList({ filters, onFilterClick }: FilterListProps) {
    const handleFilterClick = (e: MouseEvent<HTMLDivElement>) => {
        const filter = e.currentTarget.textContent;
        if (filter) {
            console.log(filter + " clicked");
            onFilterClick(filter);
        }
    }

    return <Container>
        {filters.map(filter => <div key={filter} onClick={handleFilterClick}>{filter}</div>)}
    </Container>

}

const { color, typography, mediaQueries } = DESIGN_TOKEN;

const Container = styled.div`
    display: flex;

    color: ${color.gray[1]};

    ${mediaQueries.mobile}{
        gap: 1.6rem;

        ${typography.font14Bold}
    }
    ${mediaQueries.tablet}{
        gap: 2rem;

        ${typography.font16Bold}
    }

    :hover{
       cursor: pointer; 
       color: ${color.black[3]};
    }
`
