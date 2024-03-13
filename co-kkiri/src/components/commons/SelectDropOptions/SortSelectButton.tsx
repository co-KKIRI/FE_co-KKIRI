import styled from "styled-components";
import DropdownMenu from "../DropdownMenu";
import DropdownButton from "../DropdownButton";
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
      <DropdownButton toggleDropdown={toggleDropdown} selectOption={selectOption} />
      <DropdownMenu isOpen={isOpen} handleSelectOption={handleSelectOption} selectType="sortList"></DropdownMenu>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1.6rem;
  position: relative;
`;
