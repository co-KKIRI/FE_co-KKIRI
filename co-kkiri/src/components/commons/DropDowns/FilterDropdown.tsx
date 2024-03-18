import { useState } from "react";
import styled from "styled-components";
import FilterButton from "./commons/FilterButton";
import useOpenToggle from "@/hooks/useOpenToggle";
import DropMenu from "./commons/DropMenu";
import { DROPDOWN_INFO } from "@/constants/dropDown";

interface FilterDropdownProps {
  menuInfoType: "position" | "progressWay";
  onSelectFilter: (menuInfoType: string, selectedValue: string) => void;
}

/**
 * FilterDropdown 컴포넌트
 * @param menuInfoType: 드랍메뉴 내용
 * @property {"position"|"progressWay"} menuInfoType
 * */
export default function FilterDropdown({ menuInfoType, onSelectFilter }: FilterDropdownProps) {
  const { filter } = DROPDOWN_INFO;

  const [selectOption, setSelectOption] = useState(filter[menuInfoType].defaultValue);
  const [isSelected, setIsSelected] = useState(false);
  const { isOpen, openToggle: toggleDropdown, ref } = useOpenToggle();

  const handleSelectOption = (option: string) => {
    setSelectOption(option);
    setIsSelected(true);
    onSelectFilter(menuInfoType, option);
    toggleDropdown();
  };

  return (
    <Container ref={ref}>
      <FilterButton onClick={toggleDropdown} selectOption={selectOption} isSelected={isSelected} />
      <DropMenu
        $borderType="round"
        isOpen={isOpen}
        handleSelectOption={handleSelectOption}
        options={filter[menuInfoType].options}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  position: relative;
  width: 10.4rem;
`;
