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
  onStacksChange: (selectedStacks: string[]) => void;
}

export default function SelectLayout({ onStacksChange }: SelectLayoutProps) {
  const [filter, setFilter] = useState<StackPositionFilter>("ALL");
  const [selectedStacks, setSelectedStacks] = useState<string[]>([]);

  useEffect(() => {
    onStacksChange(selectedStacks);
  }, [selectedStacks, onStacksChange]);

  return (
    <Container $isSelectedStacks={selectedStacks.length !== 0}>
      <FilterList
        currentFilter={mappedFilter[filter]}
        filters={Object.values(mappedFilter)}
        onFilterClick={(filter) => {
          const filterKey = getFilterKey<StackPositionFilter>(mappedFilter, filter);
          setFilter(filterKey as StackPositionFilter);
        }}
      />
      <StackChipList
        selectedStacks={selectedStacks}
        filter={filter}
        onStackChipClick={(stack) => {
          if (selectedStacks.includes(stack)) {
            setSelectedStacks((prevStacks) => prevStacks.filter((prevStack) => prevStack !== stack));
          } else {
            setSelectedStacks((prevStacks) => [...prevStacks, stack]);
          }
        }}
      />
      <ResetButton
        onReset={() => {
          setSelectedStacks([]);
        }}
      />
      {selectedStacks.length !== 0 && (
        <DeleteStackChipList
          stacks={selectedStacks}
          onDeleteStack={(stack) => {
            setSelectedStacks((prevStacks) => prevStacks.filter((prevStack) => prevStack !== stack));
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
