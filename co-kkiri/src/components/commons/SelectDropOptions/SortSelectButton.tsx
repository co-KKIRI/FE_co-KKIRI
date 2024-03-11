import styled from "styled-components";
import DropdownMenu from "../DropdownMenu";
import DropdownButton from "../DropdownButton";
import { useState } from "react";

export default function SortSelectButton() {
  const [selectOption, setSelectOption] = useState("최신순");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <DropdownButton toggleDropdown={toggleDropdown} selectOption={selectOption} />
      <DropdownMenu
        isOpen={isOpen}
        toggleDropdown={toggleDropdown}
        setSelectOption={setSelectOption}
        selectType="sortList"></DropdownMenu>
    </Container>
  );
}

const Container = styled.div`
  width: 10.4rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1.6rem;
`;
