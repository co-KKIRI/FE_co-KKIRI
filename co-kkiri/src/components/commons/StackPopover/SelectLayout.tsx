import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";
import DefaultFilterList from "../FilterList";
import DefaultResetButton from "./ResetButton";
import DefaultStackChipList from "./StackChipList";
import DefaultDeleteStackChipList from "./DeleteStackChipList";
import { useEffect, useState } from "react";
import { StackPositionFilter, mappedFilter } from "./constants";
import { getFilterKey } from "@/utils/ObjectUtils";

interface SelectLayoutProps {
  stacks: string[];
  onStacksChange: (selectedStacks: string[]) => void;
  isDeletedChip?: boolean;
  limit?: number;
  className?: string;
}

export default function SelectLayout({ stacks, onStacksChange, isDeletedChip, limit, className }: SelectLayoutProps) {
  const [filter, setFilter] = useState<StackPositionFilter>("ALL");
  useEffect(() => {}, [stacks, onStacksChange]);

  return (
    <Container $isSelectedStacks={!!isDeletedChip && stacks.length !== 0} className={className}>
      <FilterList
        type="filter"
        currentFilter={mappedFilter[filter]}
        filters={Object.values(mappedFilter)}
        onFilterClick={(filter) => {
          const filterKey = getFilterKey<StackPositionFilter>(mappedFilter, filter);
          setFilter(filterKey as StackPositionFilter);
        }}
      />
      <StackChipList
        selectedStacks={stacks}
        filter={filter}
        onStackChipClick={(stack) => {
          if (stacks.includes(stack)) {
            onStacksChange(stacks.filter((prevStack) => prevStack !== stack));
          } else {
            //limit 초과해서 담을 수는 없음
            if (limit && stacks.length >= limit) return;

            onStacksChange([...stacks, stack]);
          }
        }}
      />
      <ResetButton
        onReset={() => {
          onStacksChange([]);
        }}
      />
      {!!isDeletedChip && stacks.length !== 0 && (
        <DeleteStackChipList
          stacks={stacks}
          onDeleteStack={(stack) => {
            onStacksChange(stacks.filter((prevStack) => prevStack !== stack));
          }}
        />
      )}
    </Container>
  );
}

const { color, mediaQueries } = DESIGN_TOKEN;

interface ContainerProps {
  $isSelectedStacks: boolean;
}
const Container = styled.div<ContainerProps>`
  height: fit-content;

  padding: 3rem 4rem;

  display: grid;
  position: absolute;
  top: 4.2rem;
  z-index: 997;

  border-radius: 2rem;
  border: 0.1rem solid ${color.gray[2]};

  background-color: ${color.white};

  grid-template-areas:
    "filterlist resetbutton"
    "stackchips stackchips"
    ${({ $isSelectedStacks }) => $isSelectedStacks && `"deletestackchips deletestackchips"`};

  ${mediaQueries.mobile} {
    width: 32rem;
    padding: 2rem 3rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  ${mediaQueries.tablet} {
    width: 70rem;
    gap: 3rem;
  }

  ${mediaQueries.desktop} {
    width: 85.6rem;
    gap: 3rem;
  }
`;

const FilterList = styled(DefaultFilterList)`
  grid-area: filterlist;
`;

const ResetButton = styled(DefaultResetButton)`
  grid-area: resetbutton;
  justify-self: end;
`;

const StackChipList = styled(DefaultStackChipList)`
  grid-area: stackchips;
`;

const DeleteStackChipList = styled(DefaultDeleteStackChipList)`
  grid-area: deletestackchips;
`;
