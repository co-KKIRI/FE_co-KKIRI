import DESIGN_TOKEN from "@/styles/tokens";
import { MouseEvent } from "react";
import styled, { css } from "styled-components";
import { ICONS } from "@/constants/icons";

interface FilterListProps {
  type: "filter" | "category";
  currentFilter: string;
  filters: string[];
  onFilterClick(filter: string): void;
  className?: string;
}

export default function FilterList({ type, currentFilter, filters, onFilterClick, className }: FilterListProps) {
  const handleFilterClick = (e: MouseEvent<HTMLDivElement>) => {
    const filter = e.currentTarget.textContent;
    if (filter) {
      onFilterClick(filter);
    }
  };

  return (
    <Container className={className} type={type}>
      {filters.map((filter) => (
        <Wrapper key={filter} $isSelected={currentFilter === filter} onClick={handleFilterClick}>
          {type === "category" && <img src={ICONS.categorySelected.src} alt={ICONS.categorySelected.alt} />}
          {filter}
        </Wrapper>
      ))}
    </Container>
  );
}

const { color, typography, mediaQueries } = DESIGN_TOKEN;

const Container = styled.div<{ type: "filter" | "category" }>`
  display: flex;
  gap: 2rem;
  color: ${color.gray[1]};

  ${({ type }) =>
    type === "filter" &&
    css`
      ${typography.font16Bold}

      ${mediaQueries.mobile} {
        gap: 1.6rem;
        ${typography.font14Bold}
      }
    `}

  ${({ type }) =>
    type === "category" &&
    css`
      ${typography.font20Bold}
      display: flex;
      gap: 2rem;
      justify-content: flex-start;
    `}
`;

const Wrapper = styled.div<{ $isSelected?: boolean }>`
  ${({ $isSelected }) => $isSelected && `color: ${color.black[1]};`}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 0.6rem;

  img {
    display: ${({ $isSelected }) => ($isSelected ? "block" : "none")};
  }

  &:hover {
    cursor: pointer;
    ${({ $isSelected }) => !$isSelected && `color: ${color.black[3]};`}
  }
`;
