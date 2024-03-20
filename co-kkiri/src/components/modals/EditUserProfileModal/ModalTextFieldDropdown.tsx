import MultiselectDropdown from "@/components/commons/DropDowns/StackMultiselectDropdown";
import UserInfoDropdown from "@/components/commons/DropDowns/UserInfoDropdown";
import { LABELS, ModalTextFieldInputConfig, REQUIRED, RULES } from "@/constants/textInputRules";
import DESIGN_TOKEN from "@/styles/tokens";
import { Control, Controller, ControllerRenderProps, FieldValues } from "react-hook-form";
import styled from "styled-components";
import { FormData } from "./EditUserProfileModalLayout";

interface ModalTextFieldDropdownProps {
  name: ModalTextFieldInputConfig;
  control: Control<FormData>;
  className?: string;
}

export default function ModalTextFieldDropdown({ name, control, className }: ModalTextFieldDropdownProps) {
  const renderDropdown = (
    name: ModalTextFieldInputConfig,
    field: ControllerRenderProps<FormData, ModalTextFieldInputConfig>,
  ) => {
    switch (name) {
      case "position":
        return <UserInfoDropdown menuInfoType="position" onSelect={field.onChange} dropdownRef={field.ref} />;
      case "career":
        return <UserInfoDropdown menuInfoType="career" onSelect={field.onChange} />;
      case "stacks":
        return <MultiselectDropdown selectedOptions={field.value as string[]} onSelectChange={field.onChange} />;
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
          </Label>{" "}
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
