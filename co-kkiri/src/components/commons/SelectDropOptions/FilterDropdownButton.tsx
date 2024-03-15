import { useState } from "react";
import styled from "styled-components";
import DropdownMenu from "../DropdownMenu";
import FilterButton from "../FilterButton";
import useOpenToggle from "@/hooks/useOpenToggle";

interface FilterDropdownButtonProps {
  filterType: "position" | "progressWay";
  onSelectFilter: (filterType: string, selectedValue: string) => void;
}

const filterDefaultValue = {
  position: "포지션",
  progressWay: "진행 방식",
};

/**
 * FilterDropdownButton 컴포넌트
 * filterType에 따라 dropdown 옵션이 정해집니다.
 * @property {"position"|"progressWay"} filterType
 * */
export default function FilterDropdownButton({ filterType, onSelectFilter }: FilterDropdownButtonProps) {
  const defaultValue = filterDefaultValue[filterType];

  const [selectOption, setSelectOption] = useState(defaultValue);
  const [isSelected, setIsSelected] = useState(false);
  const { isOpen, openToggle: toggleDropdown, ref } = useOpenToggle();

  const handleSelectOption = (option: string) => {
    setSelectOption(option);
    setIsSelected(true);
    onSelectFilter(filterType, option);
    toggleDropdown();
  };

  return (
    <Container ref={ref}>
      <FilterButton onClick={toggleDropdown} selectOption={selectOption} isSelected={isSelected} />
      <DropdownMenu isOpen={isOpen} handleSelectOption={handleSelectOption} selectType={filterType} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.6rem;
  position: relative;
`;
