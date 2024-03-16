import styled from "styled-components";
import DefaultChip from "./DefaultChip";
import { MouseEvent } from "react";
import { ICONS } from "@/constants/icons";

interface DeleteStackChipProps {
  label: string;
  onDelete: (stack: string) => void;
}

export default function DeleteStackChip({ label, onDelete }: DeleteStackChipProps) {
  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    onDelete(label);
  };

  return <Container label={label} icon={ICONS.deleted} onIconClick={onClick} />;
}

const Container = styled(DefaultChip)`
  padding: 0.4rem 0.8rem 0.4rem 1.2rem;
`;
