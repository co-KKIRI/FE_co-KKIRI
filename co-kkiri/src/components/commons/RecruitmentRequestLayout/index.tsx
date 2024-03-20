import DeadlineDropdown from "@/components/commons/DropDowns/DeadlineDropdown/DeadlineDropdown";
import RecruitDropdown from "@/components/commons/DropDowns/RecruitDropdown";
import MultiselectDropdown from "@/components/commons/DropDowns/StackMultiselectDropdown";
import RadioButton from "@/components/commons/RadioButton";
import QuillEditor from "@/components/commons/ReactQuill";
import SelectPositionChipList from "@/components/commons/SelectPositionChipList";
import * as S from "./RecruitLayout.styled";
import { Dispatch, SetStateAction } from "react";
import { RecruitmentRequest } from "@/types/recruitmentRequestTypes";

interface RecruitLayoutProps {
  handleSelectType: (type: string) => void;
  handleSelectOption: ({ optionType, option }: { optionType: string; option: string | number }) => void;
  handleChangeLink: (link: string) => void;
  handleSelectStack: (stacks: string[]) => void;
  handleSelectPosition: (position: string) => void;
  selectedOptions: RecruitmentRequest;
  setSelectedOptions: Dispatch<SetStateAction<RecruitmentRequest>>;
}

export default function RecruitmentRequestLayout({
  handleSelectType,
  handleSelectOption,
  handleSelectStack,
  handleChangeLink,
  handleSelectPosition,
  selectedOptions,
  setSelectedOptions,
}: RecruitLayoutProps) {
  return (
    <>
      <h1>스터디/프로젝트 정보 입력</h1>
      <S.GirdContainer>
        <S.RadioButtonBox>
          <h3>모집 구분</h3>
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
          <h3>마감기간</h3>
          <DeadlineDropdown setSelectedOptions={setSelectedOptions} />
        </S.SelectBox>
        <S.SelectBox>
          <h3>진행 기간</h3>
          <RecruitDropdown
            menuInfoType="progressPeriod"
            onClick={(option) => handleSelectOption({ optionType: "progressPeriod", option })}
          />
        </S.SelectBox>
        <S.SelectBox>
          <h3>모집 인원</h3>
          <RecruitDropdown
            menuInfoType="capacity"
            onClick={(option) => handleSelectOption({ optionType: "capacity", option })}
          />
        </S.SelectBox>
        <S.SelectBox>
          <h3>진행 방식</h3>
          <RecruitDropdown
            menuInfoType="progressWay"
            onClick={(option) => handleSelectOption({ optionType: "progressWay", option })}
          />
        </S.SelectBox>
        <S.SelectBox>
          <h3>연락 방법</h3>
          <RecruitDropdown
            menuInfoType="contactWay"
            onClick={(option) => handleSelectOption({ optionType: "contactWay", option })}
            onChange={(link) => handleChangeLink(link)}
          />
        </S.SelectBox>
      </S.GirdContainer>
      <S.SelectChipBox>
        <h3>기술 스택</h3>
        <MultiselectDropdown
          selectedOptions={selectedOptions.stacks}
          onSelectChange={(stack) => handleSelectStack(stack)}
        />
      </S.SelectChipBox>
      <S.SelectChipBox>
        <h3>모집 포지션</h3>
        <SelectPositionChipList
          selectedPositions={selectedOptions.positions}
          onChipClick={(position) => handleSelectPosition(position)}
        />
      </S.SelectChipBox>
      <S.QuillBox>
        <h1>스터디/프로젝트 소개</h1>
        <QuillEditor setSelectedOptions={setSelectedOptions} />
      </S.QuillBox>
    </>
  );
}
