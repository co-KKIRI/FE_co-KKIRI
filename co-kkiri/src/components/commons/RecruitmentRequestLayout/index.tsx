import DeadlineDropdown from "@/components/commons/DropDowns/DeadlineDropdown/DeadlineDropdown";
import Dropdown from "@/components/commons/DropDowns/Dropdown";
import MultiselectDropdown from "@/components/commons/DropDowns/StackMultiselectDropdown";
import QuillEditor from "@/components/commons/ReactQuill";
import SelectPositionChipList from "@/components/commons/SelectPositionChipList";
import * as S from "./RecruitLayout.styled";
import { DROPDOWN_FORM_INFO } from "@/constants/dropDown";
import { RecruitApiRequestDto } from "@/lib/api/post/type";
import { format } from "date-fns";
import Button from "../Button";
import { useForm, Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { handleSelectPosition, handleSelectStack, isButtonDisabled, validateFormData } from "./utils";
import RadioButtonField from "./RadioButtonField";
import FormElement from "../Form/FormElement";
import RHFDropdown from "../Form/RHFDropdown";
import LinkInput from "./LinkInput";
import { useMemo } from "react";

interface RecruitmentRequestLayoutProps {
  onSubmitClick: (data: FieldValues) => void;
  buttonText: string;
  selectedOptions: RecruitApiRequestDto;
  setSelectedOptions: React.Dispatch<React.SetStateAction<RecruitApiRequestDto>>;
}

export default function RecruitmentRequestLayout({
  selectedOptions,
  setSelectedOptions,
  buttonText,
  onSubmitClick,
}: RecruitmentRequestLayoutProps) {
  const {
    recruitment: { capacity, progressPeriod, progressWay, contactWay },
  } = DROPDOWN_FORM_INFO;

  const {
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: selectedOptions,
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (!validateFormData(errors)) {
      onSubmitClick(data);
    }
  };
  const contactWayValue = watch("contactWay");
  const titleValue = watch("title");
  const contentValue = watch("content");

  return (
    <S.SelectContainer onSubmit={handleSubmit(onSubmit)}>
      <h1>스터디/프로젝트 정보 입력</h1>
      <S.GirdContainer>
        <S.RadioButtonBox>
          <h3>
            모집 구분 <span>*</span>
          </h3>
          <span>
            <RadioButtonField name="type" value="STUDY" control={control} setSelectedOptions={setSelectedOptions} />
            <RadioButtonField name="type" value="PROJECT" control={control} setSelectedOptions={setSelectedOptions} />
          </span>
        </S.RadioButtonBox>
        <S.SelectBox>
          <h3>
            모집 마감 기간<span>*</span>
          </h3>
          <Controller
            name="recruitEndAt"
            defaultValue={selectedOptions.recruitEndAt}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <DeadlineDropdown
                  placeholder="모집 마감 기간"
                  onSelect={(option) => {
                    const formattedDate = format(option, "yyyy-MM-dd 23:59:59");
                    setSelectedOptions((prevOptions) => ({
                      ...prevOptions,
                      recruitEndAt: formattedDate,
                    }));
                    field.onChange(formattedDate);
                  }}
                  selectedOption={
                    selectedOptions.recruitEndAt ? format(new Date(selectedOptions.recruitEndAt), "yyyy.MM.dd") : ""
                  }
                />
                {errors.recruitEndAt && <p>필수 입력사항입니다</p>}
              </>
            )}
          />
        </S.SelectBox>
        <S.SelectBox>
          <FormElement
            label="진행 기간"
            FormFieldComponent={
              <RHFDropdown
                formFieldName="progressPeriod"
                placeholder="진행 기간"
                options={progressPeriod}
                control={control}
              />
            }
          />
        </S.SelectBox>
        <FormElement
          label="모집 인원"
          FormFieldComponent={
            <RHFDropdown formFieldName="capacity" placeholder="모집 인원" options={capacity} control={control} />
          }
        />
        <FormElement
          label="진행 방식"
          FormFieldComponent={
            <RHFDropdown
              formFieldName="progressWay"
              placeholder="진행 방식"
              options={progressWay}
              control={control}
              isEssential
            />
          }
          isEssential
        />
        <div>
          <FormElement
            label="연락 방법"
            FormFieldComponent={
              <RHFDropdown formFieldName="contactWay" placeholder="연락 방법" options={contactWay} control={control} />
            }
          />
          {contactWayValue !== "기타" && (
            <>
              <Controller
                name="link"
                defaultValue={selectedOptions.link}
                control={control}
                rules={{
                  pattern: {
                    value:
                      contactWayValue === "이메일"
                        ? /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
                        : /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,})\/?([\w/#.-]*)*(\?[\w=&.-]*)?(#[\w-]*)?$/,
                    message:
                      contactWayValue === "이메일" ? "올바른 이메일 형식이 아닙니다." : "올바른 url 형식이 아닙니다",
                  },
                }}
                render={({ field }) => (
                  <LinkInput
                    contactWayValue={contactWayValue}
                    onChange={(newLink) => {
                      setSelectedOptions((prevOption) => ({ ...prevOption, link: newLink }));
                      field.onChange(newLink);
                    }}
                  />
                )}
              />
            </>
          )}
        </div>
      </S.GirdContainer>
      <S.SelectChipBox>
        <h3>기술 스택</h3>
        <Controller
          name="stacks"
          defaultValue={selectedOptions.stacks}
          control={control}
          render={({ field }) => (
            <MultiselectDropdown
              selectedOptions={selectedOptions.stacks}
              onSelectChange={(stack) => {
                handleSelectStack(stack, setSelectedOptions);
                field.onChange(stack);
              }}
            />
          )}
        />
      </S.SelectChipBox>
      <S.SelectPositionBox>
        <h3>
          모집 포지션<span>*</span>
        </h3>
        <Controller
          name="positions"
          defaultValue={selectedOptions.positions}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectPositionChipList
              selectedPositions={selectedOptions.positions}
              onChipClick={(selectedPosition) => {
                const updatedPositions = selectedOptions.positions.includes(selectedPosition)
                  ? selectedOptions.positions.filter((prevPosition) => prevPosition !== selectedPosition)
                  : [...selectedOptions.positions, selectedPosition];
                handleSelectPosition(updatedPositions, setSelectedOptions);
                field.onChange(updatedPositions);
              }}
            />
          )}
        />
        {errors.positions && <p>필수 입력사항입니다</p>}
      </S.SelectPositionBox>
      <S.QuillBox>
        <h1>스터디/프로젝트 소개</h1>
        <Controller
          name="title"
          defaultValue={selectedOptions.title}
          control={control}
          render={({ field }) => (
            <S.TitleInput
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
          )}
        />
        <Controller
          name="content"
          defaultValue={selectedOptions.content}
          control={control}
          render={({ field }) => (
            <QuillEditor
              value={selectedOptions.content}
              onChange={(value) => {
                setSelectedOptions((prevOptions) => ({
                  ...prevOptions,
                  content: value,
                }));
                field.onChange(value);
              }}
            />
          )}
        />
      </S.QuillBox>
      <S.SubmitButtonBox>
        <Button variant="primaryLight">취소하기</Button>
        <Button variant="primary" disabled={isButtonDisabled(titleValue, contentValue)}>
          {buttonText}
        </Button>
      </S.SubmitButtonBox>
    </S.SelectContainer>
  );
}
