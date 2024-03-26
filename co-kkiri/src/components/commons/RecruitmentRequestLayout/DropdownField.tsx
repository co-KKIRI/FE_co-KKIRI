import { useForm, Controller, FieldValues, ControllerRenderProps, Control } from "react-hook-form";
import Dropdown from "@/components/commons/DropDowns/Dropdown";
import DESIGN_TOKEN from "@/styles/tokens";
import { DROPDOWN_INFO } from "@/constants/dropDown";
import { RecruitApiRequestDto } from "@/lib/api/post/type";
import styled from "styled-components";

interface DropdownFieldProps {
  name: string;
  defaultValue: string;
  options: string[];
  control: Control<FieldValues, unknown>;
  setSelectedOptions: React.Dispatch<React.SetStateAction<RecruitApiRequestDto>>;
  placeholder: string;
}

export default function DropdownField({
  name,
  defaultValue,
  placeholder,
  options,
  control,
  setSelectedOptions,
}: DropdownFieldProps) {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      render={({ field }) => (
        <Dropdown
          placeholder={placeholder}
          options={options}
          selectedOption={field.value}
          onSelect={(option) => {
            setSelectedOptions((prevOption) => ({ ...prevOption, [name]: option }));
            field.onChange(option);
          }}
        />
      )}
    />
  );
}

const { color, typography } = DESIGN_TOKEN;

export const TitleInput = styled.input`
  height: 4.8rem;
  border: 0.1rem solid ${color.gray[2]};
  border-radius: 0.5rem;
  padding: 0 1.885rem;
  margin-bottom: 1.2rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    ${typography.font16Semibold};
    color: ${color.gray[1]};
  }
`;
