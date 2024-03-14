import styled from "styled-components";
import DefaultDropdownMenu from "./DefaultDropdownMenu";
import DefaultDropdownButton from "./DefaultDropdownButton";
import { useState } from "react";
import useOpenToggle from "@/hooks/useOpenToggle";

export default function SortSelectButton() {
  const [selectOption, setSelectOption] = useState("최신순");
  const { isOpen, openToggle: toggleDropdown, ref } = useOpenToggle();

  const handleSelectOption = (option: string) => {
    setSelectOption(option);
    toggleDropdown();
  };

  return (
    <Container ref={ref}>
      <DefaultDropdownButton selectType="sort" onClick={toggleDropdown} selectOption={selectOption} />
      <DefaultDropdownMenu
        isOpen={isOpen}
        handleSelectOption={handleSelectOption}
        selectType="sortList"
        borderType="round"></DefaultDropdownMenu>
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
