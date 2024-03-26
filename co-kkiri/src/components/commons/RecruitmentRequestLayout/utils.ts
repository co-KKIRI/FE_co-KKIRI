import { RecruitApiRequestDto } from "@/lib/api/post/type";
import { CategoryList } from "@/types/categoryTypes";

// handleSubmit 조건 처리
export const validateFormData = (selectedOptions: RecruitApiRequestDto) => {
  return (
    selectedOptions.recruitEndAt !== "" && selectedOptions.progressWay !== "" && selectedOptions.positions.length > 0
  );
};

// index에 해당하는 옵션 식별
export const findOptionByValue = <ValueType, OptionType>(
  values: ValueType[],
  options: OptionType[],
  value: ValueType,
) => {
  const index = values.indexOf(value);
  return options[index];
};

// handleSubmit 요청 실패 처리
export const handleRecruitFail = (selectedOptions: RecruitApiRequestDto) => {
  if (!validateFormData(selectedOptions)) {
    alert("필수값을 입력해주세요");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

// 모집 포지션 선택
export const handleSelectPosition = (
  position: string[],
  setSelectedOptions: React.Dispatch<React.SetStateAction<RecruitApiRequestDto>>,
): void => {
  setSelectedOptions((prevOptions) => ({
    ...prevOptions,
    positions: position,
  }));
};

// 기술스택 선택
export const handleSelectStack = (
  stacks: string[],
  setSelectedOptions: React.Dispatch<React.SetStateAction<RecruitApiRequestDto>>,
): void => {
  setSelectedOptions((prevOptions) => ({
    ...prevOptions,
    stacks: stacks,
  }));
};

// 모집 선택
export const handleSelectType = (
  type: CategoryList,
  setSelectedOptions: React.Dispatch<React.SetStateAction<RecruitApiRequestDto>>,
): void => {
  setSelectedOptions((prevOptions) => ({
    ...prevOptions,
    type: type,
  }));
};
