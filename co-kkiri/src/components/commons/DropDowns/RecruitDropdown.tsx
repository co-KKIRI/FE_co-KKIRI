import styled from "styled-components";
import DropMenu from "./commons/DropMenu";
import { useState } from "react";
import useOpenToggle from "@/hooks/useOpenToggle";
import DESIGN_TOKEN from "@/styles/tokens";
import SquareDropButton from "./commons/SquareDropButton";
import { DROPDOWN_INFO } from "@/constants/dropDown";

interface RecruitDropdownProps {
  menuInfoType: "progressWay" | "capacity" | "progressPeriod" | "contactWay";
  onClick: (option: string | number) => void;
}

/**
 * RecruitDropdown 컴포넌트
 * @param  menuInfoType: 드랍메뉴 내용
 * @property {"progressWay" | "capacity" | "progressPeriod" | "contactWay"} menuInfoType
 * */
export default function RecruitDropdown({ menuInfoType, onClick }: RecruitDropdownProps) {
  const { recruitment } = DROPDOWN_INFO;
  const [selectOption, setSelectOption] = useState<string | number>(recruitment[menuInfoType].defaultValue);
  const [isSelected, setIsSelected] = useState(false);
  const { isOpen, openToggle: toggleDropdown, ref } = useOpenToggle();

  const handleSelectOption = (option: string | number) => {
    setSelectOption(option);
    onClick(option);
    setIsSelected(true);
    toggleDropdown();
  };

  return (
    <Container ref={ref}>
      <SquareDropButton
        selectOption={selectOption}
        onClick={toggleDropdown}
        $isSelected={isSelected}
        $iconType="default"
      />
      <DropMenu
        isOpen={isOpen}
        handleSelectOption={handleSelectOption}
        $borderType="square"
        options={recruitment[menuInfoType].options}></DropMenu>
    </Container>
  );
}

const { mediaQueries } = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
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
