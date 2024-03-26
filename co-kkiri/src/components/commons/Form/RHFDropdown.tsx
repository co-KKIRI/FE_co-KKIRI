import { Control, Controller, FieldValues, Path } from "react-hook-form";
import FormDropdown from "./FormDropdown";

interface RHFDropdownProps<ControlType extends FieldValues> {
  placeholder: string;
  options: string[];
  formFieldName: Path<ControlType>;
  control: Control<ControlType>;
  isEssential?: boolean;
  errorMessage?: string;
}

export default function RHFDropdown<ControlType extends FieldValues>({
  placeholder,
  options,
  formFieldName,
  control,
  isEssential,
  errorMessage,
}: RHFDropdownProps<ControlType>) {
  return (
    <Controller
      name={formFieldName}
      control={control}
      rules={isEssential ? { required: errorMessage || "필수 입력사항입니다" } : {}}
      render={({ field, fieldState }) => (
        <FormDropdown
          placeholder={placeholder}
          value={field.value}
          options={options}
          onChange={field.onChange}
          isError={fieldState.invalid}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
}
