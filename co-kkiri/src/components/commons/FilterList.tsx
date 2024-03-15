import DESIGN_TOKEN from "@/styles/tokens";
import { MouseEvent, useState } from "react";
import styled from "styled-components";

interface FilterListProps {
  filters: string[];
  onFilterClick(filter: string): void;
}

export default function FilterList({ filters, onFilterClick }: FilterListProps) {
  const [currentFilter, setCurrentFilter] = useState<string>(filters[0]);

  const handleFilterClick = (e: MouseEvent<HTMLDivElement>) => {
    const filter = e.currentTarget.textContent;
    if (filter) {
      onFilterClick(filter);
      setCurrentFilter(filter);
    }
  };

  return (
    <Container>
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
