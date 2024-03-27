import { Control, Controller, FieldValues, Path } from "react-hook-form";
import FormDropdown from "./FormDropdown";

export type Option<ValueType> = {
  label: string;
  value: ValueType;
};

interface RHFDropdownProps<ControlType extends FieldValues, ValueType> {
  placeholder: string;
  options: Option<ValueType>[];
  formFieldName: Path<ControlType>;
  control: Control<ControlType>;
  isEssential?: boolean;
  errorMessage?: string;
}

export default function RHFDropdown<ControlType extends FieldValues, ValueType>({
  placeholder,
  options,
  formFieldName,
  control,
  isEssential,
  errorMessage,
}: RHFDropdownProps<ControlType, ValueType>) {
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
