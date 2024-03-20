import { useState } from "react";
import RecruitmentRequestLayout from "@/components/commons/RecruitmentRequestLayout";
import { RecruitmentRequest } from "@/types/recruitmentRequestTypes";

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

  return (
    <RecruitmentRequestLayout
      handleSelectType={handleSelectType}
      handleSelectOption={handleSelectOption}
      handleSelectStack={handleSelectStack}
      handleSelectPosition={handleSelectPosition}
      selectedOptions={selectedOptions}
      setSelectedOptions={setSelectedOptions}
      submitButtonText="글 등록하기"
    />
  );
}
