import DeadlineDropdown from "@/components/commons/DropDowns/DeadlineDropdown/DeadlineDropdown";
import Dropdown from "@/components/commons/DropDowns/Dropdown";
import MultiselectDropdown from "@/components/commons/DropDowns/StackMultiselectDropdown";
import RadioButton from "@/components/commons/RadioButton";
import QuillEditor from "@/components/commons/ReactQuill";
import SelectPositionChipList from "@/components/commons/SelectPositionChipList";
import * as S from "./RecruitLayout.styled";
import { DROPDOWN_INFO } from "@/constants/dropDown";
import { ChangeEvent, useState } from "react";
import { RecruitApiRequestDto } from "@/lib/api/post/type";
import { format } from "date-fns";
import LinkInput from "./LinkInput";
import Button from "../Button";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { CategoryList } from "@/types/categoryTypes";
import styled from "styled-components";
import Positions from "../Positions";

interface RecruitmentRequestLayoutProps {
  onSubmit: (data: RecruitApiRequestDto) => void;
  buttonText: string;
  defaultOption?: RecruitApiRequestDto;
}

export default function RecruitmentRequestLayout({
  onSubmit,
  buttonText,
  defaultOption,
}: RecruitmentRequestLayoutProps) {
  const {
    recruitment: { capacity, progressPeriod, progressWay, contactWay },
  } = DROPDOWN_INFO;

  const initialOption: RecruitApiRequestDto = {
    type: "STUDY",
    recruitEndAt: "",
    progressPeriod: null,
    capacity: null,
    contactWay: null,
    progressWay: null,
    stacks: [],
    positions: [],
    title: null,
    content: null,
    link: null,
  };

  //초기값으로 기본값옵션을 전달해주고있으면 기본값옵션으로 없으면 원시값옵션으로
  const [selectedOptions, setSelectedOptions] = useState<RecruitApiRequestDto>(
    defaultOption ? defaultOption : initialOption,
  );

  const findOptionByValue = <ValueType, OptionType>(values: ValueType[], options: OptionType[], value: ValueType) => {
    const index = values.indexOf(value);
    return options[index];
  };

  const handleSelectType = (type: CategoryList): void => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      type: type,
    }));
  };

  const handleSelectStack = (stacks: string[]): void => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      stacks: stacks,
    }));
  };

  const handleSelectPosition = (position: string[]): void => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      positions: position,
    }));
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  console.log(selectedOptions);

  return (
    <S.SelectContainer
      onSubmit={handleSubmit((selectedOptions: FieldValues) => onSubmit(selectedOptions as RecruitApiRequestDto))}>
      <h1>스터디/프로젝트 정보 입력</h1>
      <S.GirdContainer>
        <S.RadioButtonBox>
          <h3>
            모집 구분 <span>*</span>
          </h3>
          <span>
            <S.RadioButtonWarper>
              <Controller
                name="type"
                defaultValue="STUDY"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <RadioButton
                    defaultChecked
                    value="STUDY"
                    onClick={() => {
                      handleSelectType("STUDY");
                      field.onChange("STUDY");
                    }}
                  />
                )}
              />
              <span>스터디</span>
            </S.RadioButtonWarper>
            <S.RadioButtonWarper>
              <Controller
                name="type"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <RadioButton
                    value="PROJECT"
                    onClick={() => {
                      handleSelectType("PROJECT");
                      field.onChange("PROJECT");
                    }}
                  />
                )}
              />
              <span>프로젝트</span>
            </S.RadioButtonWarper>
          </span>
        </S.RadioButtonBox>
        <S.SelectBox>
          <h3>
            모집 마감 기간<span>*</span>
          </h3>
          <Controller
            name="recruitEndAt"
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
                {errors.recruitEndAt && <p>모집 마감 기간을 선택해주세요.</p>}
              </>
            )}
          />
        </S.SelectBox>
        <S.SelectBox>
          <h3>진행 기간</h3>
          <Controller
            name="progressPeriod"
            control={control}
            defaultValue={selectedOptions.progressPeriod}
            render={({ field }) => (
              <Dropdown
                placeholder={progressPeriod.defaultValue}
                options={progressPeriod.options}
                selectedOption={field.value}
                onSelect={(option) => {
                  setSelectedOptions((prevOption) => ({ ...prevOption, progressPeriod: option }));
                  field.onChange(option);
                }}
              />
            )}
          />
        </S.SelectBox>
        <S.SelectBox>
          <h3>모집 인원</h3>
          <Controller
            name="capacity"
            control={control}
            render={({ field }) => (
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
            )}
          />
        </S.SelectBox>
        <S.SelectBox>
          <h3>
            진행 방식<span>*</span>
          </h3>
          <Controller
            name="progressWay"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <S.DropdownWrapper>
                <Dropdown
                  placeholder={progressWay.defaultValue}
                  options={progressWay.options}
                  selectedOption={selectedOptions.progressWay}
                  onSelect={(option) => {
                    setSelectedOptions((prevOption) => ({ ...prevOption, progressWay: option }));
                    field.onChange(option);
                  }}
                />
              </S.DropdownWrapper>
            )}
          />
          {errors.progressWay && <p>진행방식을 선택해주세요.</p>}
        </S.SelectBox>
        <S.SelectBox>
          <h3>연락 방법</h3>
          <Controller
            name="contactWay"
            control={control}
            render={({ field }) => (
              <Dropdown
                placeholder={contactWay.defaultValue}
                options={contactWay.options}
                selectedOption={findOptionByValue(contactWay.values, contactWay.options, selectedOptions.contactWay)}
                onSelect={(option) => {
                  setSelectedOptions((prevOption) => ({ ...prevOption, contactWay: option }));
                  field.onChange(option);
                }}
              />
            )}
          />

          {selectedOptions.contactWay !== "기타" && (
            <>
              <Controller
                name={selectedOptions.contactWay || ""}
                control={control}
                rules={{
                  pattern: {
                    value:
                      selectedOptions.contactWay === "이메일"
                        ? /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
                        : /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,})\/?([\w/#.-]*)*(\?[\w=&.-]*)?(#[\w-]*)?$/,
                    message:
                      selectedOptions.contactWay === "이메일"
                        ? "올바른 이메일 형식이 아닙니다."
                        : "올바른 url 형식이 아닙니다",
                  },
                }}
                render={({ field }) => (
                  <LinkInput
                    selectedOption={selectedOptions.contactWay || ""}
                    onChange={(link) => {
                      setSelectedOptions((prevOption) => ({ ...prevOption, link: link }));
                      field.onChange(link);
                    }}
                  />
                )}
              />
              {selectedOptions.contactWay !== null && errors[selectedOptions.contactWay] && (
                <p>{String(errors[selectedOptions.contactWay]?.message)}</p>
              )}
            </>
          )}
        </S.SelectBox>
      </S.GirdContainer>
      <S.SelectChipBox>
        <h3>기술 스택</h3>
        <Controller
          name="stacks"
          control={control}
          render={({ field }) => (
            <MultiselectDropdown
              selectedOptions={selectedOptions.stacks}
              onSelectChange={(stack) => {
                handleSelectStack(stack);
                field.onChange(stack);
              }}
            />
          )}
        />
      </S.SelectChipBox>
      <S.SelectChipBox>
        <h3>
          모집 포지션<span>*</span>
        </h3>
        <Controller
          name="positions"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
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
          )}
        />
        {errors.positions && <p>모집 포지션을 선택해주세요.</p>}
      </S.SelectChipBox>
      <S.QuillBox>
        <h1>스터디/프로젝트 소개</h1>
        <Controller
          name="title"
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
          control={control}
          render={({ field }) => (
            <QuillEditor
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
        <Button variant="primary">{buttonText}</Button>
      </S.SubmitButtonBox>
    </S.SelectContainer>
  );
}
