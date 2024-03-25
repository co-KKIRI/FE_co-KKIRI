import Dropdown from "@/components/commons/DropDowns/Dropdown";
import MultiselectDropdown from "@/components/commons/DropDowns/StackMultiselectDropdown";
import { DROPDOWN_INFO } from "@/constants/dropDown";
import { LABELS, ModalTextFieldInputConfig, REQUIRED, RULES } from "@/constants/textInputRules";
import DESIGN_TOKEN from "@/styles/tokens";
import { UserProfile } from "@/types/userTypes";
import { findOptionByValue } from "@/utils/arrayUtils";
import { Control, Controller, ControllerRenderProps } from "react-hook-form";
import styled from "styled-components";

interface ModalTextFieldDropdownProps {
  name: ModalTextFieldInputConfig;
  control: Control<UserProfile>;
  className?: string;
}

export default function ModalTextFieldDropdown({ name, control, className }: ModalTextFieldDropdownProps) {
  const renderDropdown = (
    name: ModalTextFieldInputConfig,
    field: ControllerRenderProps<UserProfile, ModalTextFieldInputConfig>,
  ) => {
    const {
      user: { position, career },
    } = DROPDOWN_INFO;

    switch (name) {
      case "position":
        return (
          <Dropdown
            placeholder={position.defaultValue}
            selectedOption={field.value as string}
            options={position.options}
            onSelect={field.onChange}
            dropdownRef={field.ref}
          />
        );
      case "career":
        return (
          <Dropdown
            placeholder={career.defaultValue}
            options={career.options}
            selectedOption={findOptionByValue<number, string>(career.values, career.options, field.value as number)}
            onSelect={(option) => {
              const optionIndex = career.options.indexOf(option);
              const value = career.values[optionIndex];
              field.onChange(value);
            }}
          />
        );
      case "stacks":
        return (
          <MultiselectDropdown
            limit={RULES.stacks.maxLength?.value}
            selectedOptions={field.value as string[]}
            onSelectChange={field.onChange}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={RULES[name]}
      render={({ field, fieldState }) => (
        <Wrapper className={className}>
          <Label htmlFor={name}>
            {LABELS[name]}
            {REQUIRED[name] && <span className="required-mark"> *</span>}
          </Label>
          {renderDropdown(name, field)}
          <Text>{fieldState.error?.message}</Text>
        </Wrapper>
      )}
    />
  );
}

const {
  color,
  typography: { font16Bold, font12Medium },
} = DESIGN_TOKEN;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Label = styled.label`
  color: ${color.black[1]};
  ${font16Bold};
  margin-bottom: 0.4rem;

  & .required-mark {
    color: ${color.red};
  }
`;

const Text = styled.p`
  ${font12Medium}
  color: ${color.red};
  height: 1.4rem;
`;
