import styled from "styled-components";
import DefaultChip from "./DefaultChip";
import { MouseEvent } from "react";
import { ICONS } from "@/constants/icons";

interface DeleteStackChipProps {
    label: string;
    onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function DeleteStackChip({ label, onClick }: DeleteStackChipProps
) {
    return <Container label={label} icon={ICONS.deleted} onClick={onClick} />;
}

const Container = styled(DefaultChip)`
    padding: 0.4rem .8rem .4rem 1.2rem;
`
