import Button from "@/components/commons/Button";
import DeadlineDropdown from "@/components/commons/DropDowns/DeadlineDropdown/DeadlineDropdown";
import RecruitDropdown from "@/components/commons/DropDowns/RecruitDropdown";
import MultiselectDropdown from "@/components/commons/DropDowns/StackMultiselectDropdown";
import RadioButton from "@/components/commons/RadioButton";
import QuillEditor from "@/components/commons/ReactQuill";
import SelectPositionChipList from "@/components/commons/SelectPositionChipList";
import DESIGN_TOKEN from "@/styles/tokens";
import { useState } from "react";
import styled from "styled-components";
import { CategoryList } from "@/types/categoryTypes";

interface RecruitmentRequest {
  type: string;
  recruitEndAt: string;
  progressPeriod: string;
  capacity: number;
  contactWay: string;
  progressWay: string;
  stacks: string[];
  positions: string[];
  title: string;
  content: string;
}

export default function Post() {
  const [selectedOptions, setSelectedOptions] = useState<RecruitmentRequest>({
    type: "",
    recruitEndAt: "",
    progressPeriod: "",
    capacity: 0,
    contactWay: "",
    progressWay: "",
    stacks: [],
    positions: [],
    title: "",
    content: "",
  });

  const handleSelectType = (type: CategoryList) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      type: type,
    }));
  };

  const handleSelectOption = ({ optionType, option }: { optionType: string; option: string | number }) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [optionType]: option,
    }));
  };

  const handleSelectStack = (stacks: string[]) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      stacks: stacks,
    }));
  };

  const handleSelectPosition = (position: string) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      positions: prevOptions.positions.includes(position)
        ? prevOptions.positions.filter((prevPosition) => prevPosition !== position)
        : [...prevOptions.positions, position],
    }));
  };

  console.log(selectedOptions);

  return (
    <Container>
      <SelectContainer>
        <h1>스터디/프로젝트 정보 입력</h1>
        <GirdContainer>
          <RadioButtonBox>
            <h3>모집 구분</h3>
            <span>
              <RadioButtonWarper>
                <RadioButton value="STUDY" onClick={() => handleSelectType("STUDY")} />
                <span>스터디</span>
              </RadioButtonWarper>
              <RadioButtonWarper>
                <RadioButton value="PROJECT" onClick={() => handleSelectType("PROJECT")} />
                <span>프로젝트</span>
              </RadioButtonWarper>
            </span>
          </RadioButtonBox>
          <SelectBox>
            <h3>마감기간</h3>
            <DeadlineDropdown />
          </SelectBox>
          <SelectBox>
            <h3>진행 기간</h3>
            <RecruitDropdown
              menuInfoType="progressPeriod"
              onClick={(option) => handleSelectOption({ optionType: "progressPeriod", option })}
            />
          </SelectBox>
          <SelectBox>
            <h3>모집 인원</h3>
            <RecruitDropdown
              menuInfoType="capacity"
              onClick={(option) => handleSelectOption({ optionType: "capacity", option })}
            />
          </SelectBox>
          <SelectBox>
            <h3>진행 방식</h3>
            <RecruitDropdown
              menuInfoType="progressWay"
              onClick={(option) => handleSelectOption({ optionType: "progressWay", option })}
            />
          </SelectBox>
          <SelectBox>
            <h3>연락 방법</h3>
            <RecruitDropdown
              menuInfoType="contactWay"
              onClick={(option) => handleSelectOption({ optionType: "contactWay", option })}
            />
          </SelectBox>
        </GirdContainer>
        <SelectChipBox>
          <h3>기술 스택</h3>
          <MultiselectDropdown
            selectedOptions={selectedOptions.stacks}
            onSelectChange={(stack) => handleSelectStack(stack)}
          />
        </SelectChipBox>
        <SelectChipBox>
          <h3>모집 포지션</h3>
          <SelectPositionChipList
            selectedPositions={selectedOptions.positions}
            onChipClick={(position) => handleSelectPosition(position)}
          />
        </SelectChipBox>
        <QuillBox>
          <h1>스터디/프로젝트 소개</h1>
          <QuillEditor setSelectedOptions={setSelectedOptions} />
        </QuillBox>
        <SubmitButtonBox>
          <Button variant="primaryLight">취소하기</Button>
          <Button variant="primary">글 등록하기</Button>
        </SubmitButtonBox>
      </SelectContainer>
    </Container>
  );
}

const { typography, color, mediaQueries } = DESIGN_TOKEN;

const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8rem 0 12rem;

  & h1 {
    ${typography.font24Bold}
  }

  & h3 {
    ${typography.font16Bold}
  }

  & h5 {
    ${typography.font16Medium}
    ${color.black[2]}
  }
`;

const GirdContainer = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-areas:
    "a b"
    "c d"
    "e f";

  ${mediaQueries.tablet} {
    grid-template-areas:
      "a"
      "b"
      "c"
      "d"
      "e"
      "f";
  }

  ${mediaQueries.mobile} {
    grid-template-areas:
      "a"
      "b"
      "c"
      "d"
      "e"
      "f";
  }
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 77.4rem;
  gap: 4rem;

  & h1 {
    border-bottom: 0.1rem solid ${color.gray[2]};
    padding-bottom: 2rem;
  }

  ${mediaQueries.tablet} {
    width: 46.2rem;
  }

  ${mediaQueries.mobile} {
    width: 32rem;
  }
`;

const RadioButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.9rem;

  & span {
    display: flex;
    gap: 3rem;
  }
`;

const RadioButtonWarper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const SelectChipBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }
`;

const QuillBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;

  & h1 {
    border-bottom: none;
  }
`;

const SubmitButtonBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 15.6rem);
  gap: 1.2rem;
  justify-content: end;
`;
