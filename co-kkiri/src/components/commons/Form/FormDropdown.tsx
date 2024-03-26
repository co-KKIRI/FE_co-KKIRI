import Dropdown from "../DropDowns/Dropdown";
import { InputProps } from "./FormElement";

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
    <Dropdown
      placeholder={placeholder}
      selectedOption={value}
      options={options}
      onSelect={onChange}
      helperText={helperText}
      isError={isError}
    />
  );
}
