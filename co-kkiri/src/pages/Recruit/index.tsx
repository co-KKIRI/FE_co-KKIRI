import { useState } from "react";
import RecruitmentRequestLayout from "@/components/commons/RecruitmentRequestLayout";
import { RecruitmentRequest } from "@/types/recruitmentRequestTypes";
import Button from "@/components/commons/Button";
import * as S from "./styled";

export default function Recruit() {
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
    link: "",
  });

  const handleSelectType = (type: string): void => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      type: type,
    }));
  };

  const handleSelectOption = ({ optionType, option }: { optionType: string; option: string | number }): void => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [optionType]: option,
    }));
  };

  const handleChangeLink = (link: string): void => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      link: link,
    }));
  };

  const handleSelectStack = (stacks: string[]): void => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      stacks: stacks,
    }));
  };

  const handleSelectPosition = (position: string): void => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      positions: prevOptions.positions.includes(position)
        ? prevOptions.positions.filter((prevPosition) => prevPosition !== position)
        : [...prevOptions.positions, position],
    }));
  };
  console.log(selectedOptions);
  return (
    <S.Container>
      <S.SelectContainer>
        <RecruitmentRequestLayout
          handleSelectType={handleSelectType}
          handleSelectOption={handleSelectOption}
          handleSelectStack={handleSelectStack}
          handleChangeLink={handleChangeLink}
          handleSelectPosition={handleSelectPosition}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
        <S.SubmitButtonBox>
          <Button variant="primaryLight">취소하기</Button>
          <Button variant="primary">글 등록하기</Button>
        </S.SubmitButtonBox>
      </S.SelectContainer>
    </S.Container>
  );
}
