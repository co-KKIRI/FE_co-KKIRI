import { useForm, Controller, FieldValues, ControllerRenderProps } from "react-hook-form";
import Dropdown from "@/components/commons/DropDowns/Dropdown";
import DESIGN_TOKEN from "@/styles/tokens";
import { DROPDOWN_INFO } from "@/constants/dropDown";
import { RecruitApiRequestDto } from "@/lib/api/post/type";
import styled from "styled-components";
import { format } from "date-fns";
import DeadlineDropdown from "../DeadlineDropdown/DeadlineDropdown";
import MultiselectDropdown from "../StackMultiselectDropdown";
import SelectPositionChipList from "../../SelectPositionChipList";
import QuillEditor from "../../ReactQuill";

interface RecruitmentRequestLayoutProps {
  name: string;
  selectedOptions: RecruitApiRequestDto;
  setSelectedOptions: React.Dispatch<React.SetStateAction<RecruitApiRequestDto>>;
}

export default function DropdownField({ name, selectedOptions, setSelectedOptions }: RecruitmentRequestLayoutProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const {
    recruitment: { progressPeriod, progressWay, contactWay, capacity },
  } = DROPDOWN_INFO;

  const findOptionByValue = <ValueType, OptionType>(values: ValueType[], options: OptionType[], value: ValueType) => {
    const index = values.indexOf(value);
    return options[index];
  };

  const renderDropdown = (name: string, field: ControllerRenderProps<FieldValues>) => {
    switch (name) {
      case "recruitEndAt":
        return;

      case "progressPeriod":
        return (
          <>
            <Dropdown
              placeholder={progressPeriod.defaultValue}
              options={progressPeriod.options}
              selectedOption={field.value}
              onSelect={(option) => {
                setSelectedOptions((prevOption) => ({ ...prevOption, progressPeriod: option }));
                field.onChange(option);
              }}
            />
            {errors.name && <p>진행 기간을 선택해주세요.</p>}
          </>
        );
      case "progressWay":
        return (
          <>
            <Dropdown
              placeholder={progressWay.defaultValue}
              options={progressWay.options}
              selectedOption={selectedOptions.progressWay}
              onSelect={(option) => {
                setSelectedOptions((prevOption) => ({ ...prevOption, progressWay: option }));
                field.onChange(option);
              }}
            />
            {errors.name && <p>진행 방식을 선택해주세요.</p>}
          </>
        );
      case "contactWay":
        return (
          <Dropdown
            placeholder={contactWay.defaultValue}
            options={contactWay.options}
            selectedOption={findOptionByValue(contactWay.values, contactWay.options, selectedOptions.contactWay)}
            onSelect={(option) => {
              setSelectedOptions((prevOption) => ({ ...prevOption, contactWay: option }));
              field.onChange(option);
            }}
          />
        );
      case "capacity":
        return (
          <>
            <Dropdown
              placeholder={capacity.defaultValue}
              options={capacity.options}
              selectedOption={findOptionByValue(capacity.values, capacity.options, field.value)}
              onSelect={(option) => {
                const optionIndex = capacity.options.indexOf(option);
                const value = capacity.values[optionIndex];
                setSelectedOptions((prevOption) => ({ ...prevOption, capacity: value }));
                field.onChange(value);
              }}
            />
          </>
        );
      case "stacks":
        return (
          <>
            <MultiselectDropdown
              selectedOptions={selectedOptions.stacks}
              onSelectChange={(stack) => {
                handleSelectStack(stack);
                field.onChange(stack);
              }}
            />
          </>
        );
      case "positions":
        return (
          <>
            <SelectPositionChipList
              selectedPositions={selectedOptions.positions}
              onChipClick={(selectedPosition) => {
                const updatedPositions = selectedOptions.positions.includes(selectedPosition)
                  ? selectedOptions.positions.filter((prevPosition) => prevPosition !== selectedPosition)
                  : [...selectedOptions.positions, selectedPosition];
                handleSelectPosition(updatedPositions);
                field.onChange(updatedPositions);
              }}
            />
            {errors.name && <p>모집포지션을 선택해주세요.</p>}
          </>
        );
      case "title":
        return (
          <>
            <TitleInput
              placeholder="제목을 입력해주세요!"
              onChange={(e) => {
                setSelectedOptions((prevOptions) => ({
                  ...prevOptions,
                  title: e.target.value,
                }));
                field.onChange(e);
              }}
              value={selectedOptions.title || ""}
            />
          </>
        );
      case "content":
        return (
          <>
            <QuillEditor
              onChange={(value) => {
                setSelectedOptions((prevOptions) => ({
                  ...prevOptions,
                  content: value,
                }));
                field.onChange(value);
              }}
            />
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      <Controller
        name="recruitEndAt"
        defaultValue={selectedOptions.name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => <>{renderDropdown(name, field)}</>}
      />
    </>
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
