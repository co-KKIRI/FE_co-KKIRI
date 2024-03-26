import useOpenToggle from "@/hooks/useOpenToggle";
import SquareDropButton from "./commons/SquareDropButton";
import DropMenu from "./commons/DropMenu";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

interface DropdownProps {
  placeholder: string;
  selectedOption?: string | null;
  options: string[];
  isError?: boolean;
  onSelect: (option: string) => void;
  dropdownRef?: React.RefCallback<HTMLButtonElement>;
}

export default function Dropdown({
  placeholder,
  selectedOption,
  options,
  onSelect,
  isError,
  dropdownRef,
}: DropdownProps) {
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
        isError={isError}
      />
      <DropMenu isOpen={isOpen} handleSelectOption={handleSelectOption} $borderType="square" options={options} />
    </Container>
  );
}

const { color, typography } = DESIGN_TOKEN;
interface ContainerProps {
  $isError?: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0;
  gap: 0.8rem;
`;
