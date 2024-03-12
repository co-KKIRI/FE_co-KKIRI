import styled from "styled-components";
import DefaultChip from "./DefaultChip";
import { MouseEvent } from "react";
import DESIGN_TOKEN from "@/styles/tokens";

interface SelectPositionChipProps{
    label: string;
    isSelected?: boolean;
    onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function SelectPositionChip({ label, isSelected, onClick }: SelectPositionChipProps
) {
    return <Container label={label} isSelected={isSelected} onClick={onClick} />;
}

const {color, typography} = DESIGN_TOKEN;
const Container = styled(DefaultChip)`
    padding: .7rem 2rem;

    background-color: ${color.white};
    color: ${color.black[1]};
    border: .1rem solid ${color.gray[2]};

    ${typography.font14Medium}

    ${({ isSelected }) => isSelected && `
    color: ${color.secondary};
    border: .1rem solid ${color.secondary};
    `}
`;