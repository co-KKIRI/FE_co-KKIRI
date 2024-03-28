import styled from "styled-components";
import DropMenu from "./commons/DropMenu";
import { useState } from "react";
import useOpenToggle from "@/hooks/useOpenToggle";
import TextDropButton from "./commons/TextDropButton";
import { Option } from "../Form/RHFDropdown";

interface SortDropdownProps {
  placeholder: string;
  options: Option[];
  handleSortChange: (selectedSort: Option) => void;
}

export default function SortDropdown({ placeholder, options, handleSortChange }: SortDropdownProps) {
  const [selectOption, setSelectOption] = useState<Option>({ label: placeholder, value: "" });
  const [isSelected, setIsSelected] = useState(false);

  const { isOpen, openToggle: toggleDropdown, ref } = useOpenToggle();

  const handleSelectOption = (option: Option) => {
    handleSortChange(option);
    setSelectOption(option);
    setIsSelected(true);
    toggleDropdown();
  };

  return (
    <Container ref={ref}>
      <TextDropButton onClick={toggleDropdown} selectOption={selectOption.label} $isSelected={isSelected} />
      <Wrapper>
        <DropMenu
          isOpen={isOpen}
          handleSelectOption={handleSelectOption}
          options={options}
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
