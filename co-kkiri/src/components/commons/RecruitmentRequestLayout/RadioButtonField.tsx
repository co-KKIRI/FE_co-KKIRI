import { Control, Controller, FieldValues } from "react-hook-form";
import RadioButton from "../RadioButton";
import * as S from "./RecruitLayout.styled";
import { handleSelectType } from "./utils";
import { RecruitApiRequestDto } from "@/lib/api/post/type";
import { CategoryList } from "@/types/categoryTypes";

interface RadioButtonFieldProps {
  name: string;
  value: CategoryList;
  control: Control<FieldValues>;
  setSelectedOptions: React.Dispatch<React.SetStateAction<RecruitApiRequestDto>>;
}
export default function RadioButtonField({ name, value, control, setSelectedOptions }: RadioButtonFieldProps) {
  return (
    <S.RadioButtonWarper>
      <Controller
        name={name}
        defaultValue={value}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <RadioButton
            defaultChecked={value === "STUDY" ? true : false}
            value={value}
            onClick={() => {
              handleSelectType(value, setSelectedOptions);
              field.onChange(value);
            }}
          />
        )}
      />
      <span>{value === "STUDY" ? "스터디" : "프로젝트"}</span>
    </S.RadioButtonWarper>
  );
}
