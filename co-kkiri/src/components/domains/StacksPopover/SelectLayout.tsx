import styled from "styled-components";
import FilterList from "../../commons/FilterList";
import DESIGN_TOKEN from "@/styles/tokens";

export default function SelectLayout() {
    return (
        <Container>
            <FilterList filters={["전체", "프론트엔드"]} onFilterClick={() => { }} />
        </Container>
    )
}

const {color, mediaQueries} = DESIGN_TOKEN;

const Container = styled.div`
    height: fit-content;

    padding: 3rem 4rem;

    position: relative;
    top: .6rem;

    border-radius: 2rem;
    border: .1rem solid ${color.gray[2]};

    ${mediaQueries.mobile}{
        width: 32rem;
    }

    ${mediaQueries.tablet}{
        width: 69.8rem;
    }

    ${mediaQueries.desktop}{
        width: 85.4rem;
    }
`
