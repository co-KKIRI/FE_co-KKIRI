import { Control, Controller } from "react-hook-form";
import OneLinerInput from "@/components/modals/TextFieldInput";
import { CONDITIONS, LABEL } from "@/constants/textInputRules";

interface FormData {
  nickname: string;
  link: string;
  introduction: string;
}

interface ModalTextFieldInputProps {
  name: "nickname" | "link" | "introduction";
  control: Control<FormData>;
}

export default function ModalTextFieldInput({ name, control }: ModalTextFieldInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={CONDITIONS[name]}
      render={({ field, fieldState }) => (
        <OneLinerInput label={LABEL[name]} helperText={fieldState.error?.message} {...field} />
      )}
    />
  );
}
