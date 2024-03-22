import DeadlineDropdown from "@/components/commons/DropDowns/DeadlineDropdown/DeadlineDropdown";
import Dropdown from "@/components/commons/DropDowns/Dropdown";
import MultiselectDropdown from "@/components/commons/DropDowns/StackMultiselectDropdown";
import RadioButton from "@/components/commons/RadioButton";
import QuillEditor from "@/components/commons/ReactQuill";
import SelectPositionChipList from "@/components/commons/SelectPositionChipList";
import * as S from "./RecruitLayout.styled";
import { DROPDOWN_INFO } from "@/constants/dropDown";
import { useState } from "react";
import { RecruitmentRequest } from "@/types/recruitmentRequestTypes";
import { format } from "date-fns";
import LinkInput from "./LinkInput";

export default function RecruitmentRequestLayout() {
  const {
    recruitment: { capacity, progressPeriod, progressWay, contactWay },
  } = DROPDOWN_INFO;

  const [selectedOption, setSelectedOption] = useState<RecruitmentRequest>({
    type: "",
    recruitEndAt: "",
    progressPeriod: "",
    capacity: undefined,
    contactWay: "",
    progressWay: "",
    stacks: [],
    positions: [],
    title: "",
    content: "",
    link: "",
  });

  const findOptionByValue = <ValueType, OptionType>(values: ValueType[], options: OptionType[], value: ValueType) => {
    const index = values.indexOf(value);
    return options[index];
  };

  const handleSelectType = (type: string): void => {
    setSelectedOption((prevOptions) => ({
      ...prevOptions,
      type: type,
    }));
  };

  const handleSelectStack = (stacks: string[]): void => {
    setSelectedOption((prevOptions) => ({
      ...prevOptions,
      stacks: stacks,
    }));
  };

  const handleSelectPosition = (position: string): void => {
    setSelectedOption((prevOptions) => ({
      ...prevOptions,
      positions: prevOptions.positions.includes(position)
        ? prevOptions.positions.filter((prevPosition) => prevPosition !== position)
        : [...prevOptions.positions, position],
    }));
  };
  console.log(selectedOption);

  return (
    <>
      <h1>스터디/프로젝트 정보 입력</h1>
      <S.GirdContainer>
        <S.RadioButtonBox>
          <h3>
            모집 구분 <span>*</span>
          </h3>
          <span>
            <S.RadioButtonWarper>
              <RadioButton value="STUDY" onClick={() => handleSelectType("STUDY")} />
              <span>스터디</span>
            </S.RadioButtonWarper>
            <S.RadioButtonWarper>
              <RadioButton value="PROJECT" onClick={() => handleSelectType("PROJECT")} />
              <span>프로젝트</span>
            </S.RadioButtonWarper>
          </span>
        </S.RadioButtonBox>
        <S.SelectBox>
          <h3>
            모집 마감 기간 <span>*</span>
          </h3>
          <DeadlineDropdown
            placeholder="모집 마감 기간"
            selectedOption={selectedOption.recruitEndAt}
            onSelect={(option) => {
              setSelectedOption((prevOptions) => ({
                ...prevOptions,
                recruitEndAt: format(option, "yyyy.MM.dd"),
              }));
            }}
          />
        </S.SelectBox>
        <S.SelectBox>
          <h3>진행 기간</h3>
          <Dropdown
            placeholder={progressPeriod.defaultValue}
            options={progressPeriod.options}
            selectedOption={selectedOption.progressPeriod}
            onSelect={(option) => {
              setSelectedOption((prevOption) => ({ ...prevOption, progressPeriod: option }));
            }}
          />
        </S.SelectBox>
        <S.SelectBox>
          <h3>모집 인원</h3>
          <Dropdown
            placeholder={capacity.defaultValue}
            options={capacity.options}
            selectedOption={findOptionByValue(capacity.values, capacity.options, selectedOption.capacity)}
            onSelect={(option) => {
              const optionIndex = capacity.options.indexOf(option);
              const value = capacity.values[optionIndex];
              setSelectedOption((prevOption) => ({ ...prevOption, capacity: value }));
            }}
          />
        </S.SelectBox>
        <S.SelectBox>
          <h3>
            진행 방식 <span>*</span>
          </h3>
          <S.DropdownWrapper>
            <Dropdown
              placeholder={progressWay.defaultValue}
              options={progressWay.options}
              selectedOption={selectedOption?.progressWay}
              onSelect={(option) => {
                setSelectedOption((prevOption) => ({ ...prevOption, progressWay: option }));
              }}
            />
          </S.DropdownWrapper>
        </S.SelectBox>
        <S.SelectBox>
          <h3>연락 방법</h3>
          <Dropdown
            placeholder={contactWay.defaultValue}
            options={contactWay.options}
            selectedOption={selectedOption?.contactWay}
            onSelect={(option) => {
              setSelectedOption((prevOption) => ({ ...prevOption, contactWay: option }));
            }}
          />
          <LinkInput
            selectedOption={selectedOption.contactWay}
            onChange={(link) => {
              setSelectedOption((prevOption) => ({ ...prevOption, link: link }));
            }}
          />
        </S.SelectBox>
      </S.GirdContainer>
      <S.SelectChipBox>
        <h3>기술 스택</h3>
        <MultiselectDropdown
          selectedOptions={selectedOption.stacks}
          onSelectChange={(stack) => handleSelectStack(stack)}
        />
      </S.SelectChipBox>
      <S.SelectChipBox>
        <h3>
          모집 포지션<span>*</span>
        </h3>
        <SelectPositionChipList
          selectedPositions={selectedOption.positions}
          onChipClick={(position) => handleSelectPosition(position)}
        />
      </S.SelectChipBox>
      <S.QuillBox>
        <h1>스터디/프로젝트 소개</h1>
        <QuillEditor setSelectedOption={setSelectedOption} />
      </S.QuillBox>
    </>
  );
}
