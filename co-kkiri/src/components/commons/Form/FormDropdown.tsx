import styled from "styled-components";
import Dropdown from "../DropDowns/Dropdown";
import { InputProps } from "./FormElement";
import DESIGN_TOKEN from "@/styles/tokens";

interface FormDropdownProps extends InputProps {
  placeholder: string;
  options: string[];
}

export default function FormDropdown({
  placeholder,
  value,
  options,
  onChange,
  isError,
  helperText,
}: FormDropdownProps) {
  return (
    <Container>
      <Dropdown
        placeholder={placeholder}
        selectedOption={value}
        options={options}
        onSelect={onChange}
        isError={isError}
      />
      <HelperText>{helperText}</HelperText>
    </Container>
  );
}

const { color, typography } = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const HelperText = styled.p`
  color: ${color.red};
  ${typography.font12Medium}
`;
