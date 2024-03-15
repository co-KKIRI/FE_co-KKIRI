import { useState } from "react";
import styled from "styled-components";
import FilterButton from "../FilterButton";
import useOpenToggle from "@/hooks/useOpenToggle";
import DropdownMenu from "./commons/DropdownMenu";

interface FilterDropdownButtonProps {
  filterType: "position" | "meeting";
}

const filterDefaultValue = {
  position: "포지션",
  meeting: "진행 방식",
};

/**
 * FilterDropdownButton 컴포넌트
 * filterType에 따라 dropdown 옵션이 정해집니다.
 * @property {"position"|"meeting"} filterType
 * */
export default function FilterDropdownButton({ filterType }: FilterDropdownButtonProps) {
  const defaultValue = filterDefaultValue[filterType];

  const [selectOption, setSelectOption] = useState(defaultValue);
  const [isSelected, setIsSelected] = useState(false);
  const { isOpen, openToggle: toggleDropdown, ref } = useOpenToggle();

  const handleSelectOption = (option: string) => {
    setSelectOption(option);
    setIsSelected(true);
    toggleDropdown();
  };

  return (
    <Container ref={ref}>
      <FilterButton onClick={toggleDropdown} selectOption={selectOption} isSelected={isSelected} />
      <DropdownMenu
        $borderType="round"
        isOpen={isOpen}
        handleSelectOption={handleSelectOption}
        $selectType={filterType}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.6rem;
  position: relative;
  width: 10.4rem;
`;
