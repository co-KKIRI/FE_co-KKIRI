import styled from "styled-components";
import DropdownMenu from "./commons/DropdownMenu";
import DropdownButton from "./commons/DropdownButton";
import { useState } from "react";
import useOpenToggle from "@/hooks/useOpenToggle";
import DESIGN_TOKEN from "@/styles/tokens";

interface RecruitDropdownButtonProps {
  recruitInfoType: "meeting" | "memberCount" | "deadline" | "progressPeriod" | "contactMethod";
}

const recruitInfoDefaultValue = {
  meeting: "진행 방식",
  memberCount: "모집 인원",
  deadline: "마감 기간",
  progressPeriod: "진행 기간",
  contactMethod: "연락 방식",
};

/**
 * UserInfoDropdownButton 컴포넌트
 * userInfoType에 따라 dropdown 옵션이 정해집니다.
 * @property {"meeting" | "memberCount" | "recruitPeriod" | "progressPeriod" | "contactMethod"} recruitInfoType
 * */
export default function RecruitDropdownButton({ recruitInfoType }: RecruitDropdownButtonProps) {
  const defaultValue = recruitInfoDefaultValue[recruitInfoType];

  const [selectOption, setSelectOption] = useState(defaultValue);
  const [isSelected, setIsSelected] = useState(false);
  const { isOpen, openToggle: toggleDropdown, ref } = useOpenToggle();

  const handleSelectOption = (option: string) => {
    setSelectOption(option);
    setIsSelected(true);
    toggleDropdown();
  };

  return (
    <Container ref={ref}>
      <DropdownButton
        $selectType={recruitInfoType}
        onClick={toggleDropdown}
        selectOption={selectOption}
        $isSelected={isSelected}
      />
      <DropdownMenu
        isOpen={isOpen}
        handleSelectOption={handleSelectOption}
        $selectType={recruitInfoType}
        $borderType="square"></DropdownMenu>
    </Container>
  );
}

const { mediaQueries } = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.6rem;
  position: relative;
  padding: 0;
  width: 36.7rem;

  ${mediaQueries.tablet} {
    width: 46.2rem;
  }

  ${mediaQueries.mobile} {
    width: 32rem;
  }
`;
