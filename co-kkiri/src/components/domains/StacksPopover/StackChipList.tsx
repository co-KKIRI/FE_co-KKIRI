import StackChip from "@/components/commons/Chips/StackChip";
import { STACKS } from "@/constants/stacks";
import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";
import { StackPositionFilter } from "./constants";

interface StackChipGridProps {
  selectedStacks: string[];
  filter: StackPositionFilter;
  onStackChipClick: (stack: string) => void;
  className?: string;
}

export default function StackChipList({ selectedStacks, filter, onStackChipClick, className }: StackChipGridProps) {
  const filteredStacks =
    filter === "ALL"
      ? Object.values(STACKS)
      : Object.values(STACKS).filter((stack) => stack.relatedPosition.includes(filter));

  return (
    <Container className={className}>
      {filteredStacks.map((stack) => (
        <StackChip
          key={stack.name}
          label={stack.name}
          imgUrl={stack.img}
          onClick={() => {
            onStackChipClick(stack.name);
          }}
          isSelected={selectedStacks.includes(stack.name)}
        />
      ))}
    </Container>
  );
}

const { mediaQueries } = DESIGN_TOKEN;
const Container = styled.div`
  width: fit-content;

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 0.6rem;

  ${mediaQueries.mobile} {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  ${mediaQueries.tablet} {
    grid-template-columns: repeat(8, 1fr);
  }
`;
