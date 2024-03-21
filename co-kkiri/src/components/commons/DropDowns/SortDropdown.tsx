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

  const handleSelectOption = (option: string | number) => {
    handleSortChange(option as string);
    setSelectOption(option as string);
    setIsSelected(true);
    toggleDropdown();
  };

  return (
    <Container ref={ref}>
      <TextDropButton onClick={toggleDropdown} selectOption={selectOption} $isSelected={isSelected} />
      <Wrapper>
        <DropMenu
          isOpen={isOpen}
          handleSelectOption={handleSelectOption}
          options={sort.options}
          $borderType="round"></DropMenu>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  position: relative;
`;

const Wrapper = styled.div`
  padding: 0;
  width: 10.4rem;
  position: absolute;
  top: -0.9rem;
`;
