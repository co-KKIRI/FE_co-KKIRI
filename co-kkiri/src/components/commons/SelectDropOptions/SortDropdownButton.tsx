import styled from "styled-components";
import DropdownMenu from "./commons/DropdownMenu";
import DropdownButton from "./commons/DropdownButton";
import { useState } from "react";
import useOpenToggle from "@/hooks/useOpenToggle";

export default function SortSelectButton() {
  const [selectOption, setSelectOption] = useState("최신순");
  const [isSelected, setIsSelected] = useState(false);
  const { isOpen, openToggle: toggleDropdown, ref } = useOpenToggle();

  const handleSelectOption = (option: string) => {
    setSelectOption(option);
    setIsSelected(true);
    toggleDropdown();
  };

  return (
    <Container ref={ref}>
      <DropdownButton
        $selectType="sort"
        onClick={toggleDropdown}
        selectOption={selectOption}
        $isSelected={isSelected}
      />
      <DropdownMenu
        isOpen={isOpen}
        handleSelectOption={handleSelectOption}
        $selectType="sortList"
        $borderType="round"></DropdownMenu>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1.6rem;
  position: relative;
  padding: 0;
  width: 10.4rem;
`;
