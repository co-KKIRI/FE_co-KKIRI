import useOpenToggle from "@/hooks/useOpenToggle";
import SquareDropButton from "./commons/SquareDropButton";
import DropMenu from "./commons/DropMenu";
import styled from "styled-components";

interface DropdownProps {
  placeholder: string;
  selectedOption?: string | null;
  options: string[];
  onSelect: (option: string) => void;
  dropdownRef?: React.RefCallback<HTMLButtonElement>;
}

export default function Dropdown({ placeholder, selectedOption, options, onSelect, dropdownRef }: DropdownProps) {
  const { isOpen, openToggle: toggleDropdown, ref } = useOpenToggle();

  const handleSelectOption = (option: string) => {
    onSelect(option);
    toggleDropdown();
  };

  return (
    <Container ref={ref}>
      <SquareDropButton
        selectOption={selectedOption || placeholder || ""}
        onClick={toggleDropdown}
        $isSelected={!!selectedOption}
        $iconType="default"
        dropButtonRef={dropdownRef}
      />
      <DropMenu isOpen={isOpen} handleSelectOption={handleSelectOption} $borderType="square" options={options} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0;
  gap: 0.8rem;
`;
