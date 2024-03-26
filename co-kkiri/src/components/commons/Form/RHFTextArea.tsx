import { Control, Controller, FieldValues, Path } from "react-hook-form";
import FormTextArea from "./FormTextarea";

interface RHFDropdownProps<ControlType extends FieldValues> {
  placeholder: string;
  formFieldName: Path<ControlType>;
  control: Control<ControlType>;
  isEssential?: boolean;
  errorMessage?: string;
}

export default function RHFTextArea<ControlType extends FieldValues>({
  formFieldName,
  control,
  isEssential,
  errorMessage,
  placeholder,
}: RHFDropdownProps<ControlType>) {
  return (
    <Controller
      name={formFieldName}
      control={control}
      rules={isEssential ? { required: errorMessage || "필수 입력사항입니다" } : {}}
      render={({ field, fieldState }) => (
        <FormTextArea
          id={formFieldName}
          placeholder={placeholder}
          value={field.value}
          onChange={field.onChange}
          isError={fieldState.invalid}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
}
