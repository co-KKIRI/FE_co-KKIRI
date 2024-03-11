import { MouseEvent } from "react";
import styled from "styled-components";
import DefaultChip from "./DefaultChip";
import DESIGN_TOKEN from "@/styles/tokens";

interface StackChipProps {
    label: string;
    imgUrl: string;
    isSelected?: boolean;
    onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function StackChip({ label, imgUrl, isSelected, onClick }: StackChipProps
) {
    return <Container label={label} imgUrl={imgUrl} isSelected={isSelected} onClick={onClick} isVertical />;
}

const { color, typography, mediaQueries } = DESIGN_TOKEN;
const Container = styled(DefaultChip)`
    width: 7rem;
    height: 7.2rem;

    padding: .8rem;
    gap: .4rem;

    background-color: ${color.white};
    border: .1rem solid ${color.gray[2]};
    border-radius: 1rem;
    color: ${color.black[1]};

    ${({ isSelected }) => !isSelected && `opacity: .4;`}

    ${typography.font12normal}


    
    ${mediaQueries.mobile}{
        width: fit-content;
        height: fit-content;

        padding: .3rem 1.2rem;

        border-radius: 9999rem;

        & .image-container{
            display: none;
        }

        ${({ isSelected }) => isSelected && `
            background-color: ${color.white};
            color: ${color.secondary};

            border-color: ${color.secondary};
        `}
    }
    
`