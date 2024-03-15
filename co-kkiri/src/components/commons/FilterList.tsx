import DESIGN_TOKEN from "@/styles/tokens";
import { StackPosition } from "@/types/StackTypes";
import { MouseEvent } from "react";
import styled from "styled-components";

interface FilterListProps {
  currentFilter: StackPosition
  filters: StackPosition[];
  onFilterClick(filter: StackPosition): void;
  className?: string;
}

export default function FilterList({ currentFilter, filters, onFilterClick, className }: FilterListProps) {

  const handleFilterClick = (e: MouseEvent<HTMLDivElement>) => {
    const filter = e.currentTarget.textContent as StackPosition;
    if (filter) {
      onFilterClick(filter);
    }
  };

  return (
    <Container className={className}>
      {filters.map((filter) => (
        <Box key={filter} $isSelected={currentFilter === filter} onClick={handleFilterClick}>
          {filter}
        </Box>
      ))}
    </Container>
  );
}

const { color, typography, mediaQueries } = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  gap: 2rem;

  color: ${color.gray[1]};

  ${typography.font16Bold}

  ${mediaQueries.mobile} {
    gap: 1.6rem;

    ${typography.font14Bold}
  }
`;

interface BoxProps {
  $isSelected?: boolean;
}

const Box = styled.div<BoxProps>`
  ${({ $isSelected }) => $isSelected && `color: ${color.black[1]};`}

  &:hover {
    cursor: pointer;
    ${({ $isSelected }) => !$isSelected && `color: ${color.black[3]};`}
  }
`;
