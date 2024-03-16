import DeleteStackChip from "@/components/commons/Chips/DeleteStackChip";
import styled from "styled-components";

interface DeleteStackChipListProps {
  stacks: string[];
  onDeleteStack: (stack: string) => void;
  className?: string;
}

export default function DeleteStackChipList({ stacks, onDeleteStack, className }: DeleteStackChipListProps) {
  return (
    <Container className={className}>
      {stacks.map((stack) => (
        <DeleteStackChip key={stack} label={stack} onDelete={onDeleteStack} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;
