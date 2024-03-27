import styled from "styled-components";
import Dropdown from "../DropDowns/Dropdown";
import { FormFieldProps } from "./FormElement";
import DESIGN_TOKEN from "@/styles/tokens";
import { Option } from "./RHFDropdown";

interface FormDropdownProps extends FormFieldProps<Option> {
  placeholder: string;
  options: Option[];
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
        selectedOption={value.label}
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
  min-height: 1.5rem;

  color: ${color.red};
  ${typography.font12Medium}
`;
