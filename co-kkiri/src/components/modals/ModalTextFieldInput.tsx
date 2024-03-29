import { Control, Controller, FieldValues } from "react-hook-form";
import TextFieldInput from "@/components/modals/TextFieldInput";
import { LABELS, ModalTextFieldInputConfig, PLACEHOLDERS, REQUIRED, RULES } from "@/constants/textInputRules";
import styled from "styled-components";
import { UserInfoEditApiRequestDto } from "@/lib/api/myPage/type";

interface ModalTextFieldInputProps {
  name: ModalTextFieldInputConfig;
  control: Control<UserInfoEditApiRequestDto>;
  className?: string;
}

/**
 * ModalTextFieldInput 컴포넌트
 * 사용자로부터 입력을 받기 위한 텍스트 필드입니다.
 * react-hook-form의 Controller를 사용하여, 입력 값의 유효성 검사 및 상태 관리를 수행합니다.
 * name, control은 필수 입력값입니다.
 *
 * @property {string} name - 텍스트 필드의 이름으로 "nickname" | "position" | "career" | "link" | "stacks" | "introduce" 에 따라 hook form의 조건이 결정 됩니다.
 * @property {Control} control - react-hook-form의 Control 객체
 *
 * @example
 * <ModalTextFieldInput name="nickname" control={control} />
 * 필드의 입력값은 useForm의 handleSubmit, getValues, watch중 하나를 이용해서 접근할 수 있습니다.
 * 자세한 사용법은 노션에 정리해 놓을게요!
 */

export default function ModalTextFieldInput({ name, control, className }: ModalTextFieldInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={RULES[name]}
      render={({ field, fieldState }) => (
        <OneLinerInput
          label={LABELS[name]}
          isRequired={REQUIRED[name]}
          isError={fieldState.error}
          helperText={fieldState.error?.message}
          placeholder={PLACEHOLDERS[name]}
          {...field}
          className={className}
        />
      )}
    />
  );
}

const OneLinerInput = styled(TextFieldInput)`
  line-height: normal;

  & > input {
    height: 4.8rem;
  }
`;
