import styled from "styled-components";
import DropMenu from "./commons/DropMenu";
import { useState } from "react";
import useOpenToggle from "@/hooks/useOpenToggle";
import TextDropButton from "./commons/TextDropButton";
import { DROPDOWN_INFO } from "@/constants/dropDown";

interface SortDropdownProps {
  handleSortChange: (sortType: string) => void;
}

export default function SortDropdown({ handleSortChange }: SortDropdownProps) {
  const { sort } = DROPDOWN_INFO;

  const [selectOption, setSelectOption] = useState(sort.defaultValue);
  const [isSelected, setIsSelected] = useState(false);

  const { isOpen, openToggle: toggleDropdown, ref } = useOpenToggle();

  const handleSelectOption = (option: string) => {
    handleSortChange(option);
    setSelectOption(option);
    setIsSelected(true);
    toggleDropdown();
  };

  return (
    <Container ref={ref}>
      <TextDropButton onClick={toggleDropdown} selectOption={selectOption} $isSelected={isSelected} />
      <DropMenu
        isOpen={isOpen}
        handleSelectOption={handleSelectOption}
        options={sort.options}
        $borderType="round"></DropMenu>
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
