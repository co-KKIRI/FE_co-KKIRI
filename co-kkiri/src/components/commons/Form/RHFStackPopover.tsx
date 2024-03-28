import { Control, Controller, FieldValues, Path } from "react-hook-form";
import StacksPopover from "../StackPopover";

interface RHFStackPopoverProps<ControlType extends FieldValues> {
  formFieldName: Path<ControlType>;
  control: Control<ControlType>;
}

export default function RHFStackPopover<ControlType extends FieldValues>({
  formFieldName,
  control,
}: RHFStackPopoverProps<ControlType>) {
  return (
    <Controller
      name={formFieldName}
      control={control}
      render={({ field }) => <StacksPopover stacks={field.value} onStacksChange={field.onChange} />}
    />
  );
}
