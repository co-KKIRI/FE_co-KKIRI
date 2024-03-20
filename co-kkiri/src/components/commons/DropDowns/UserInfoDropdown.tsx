import styled from "styled-components";
import DropMenu from "./commons/DropMenu";
import { useState } from "react";
import useOpenToggle from "@/hooks/useOpenToggle";
import DESIGN_TOKEN from "@/styles/tokens";
import SquareDropButton from "./commons/SquareDropButton";
import { DROPDOWN_INFO } from "@/constants/dropDown";
import { RefCallBack } from "react-hook-form";

interface UserInfoDropdownProps {
  menuInfoType: "position" | "career";
  onSelect: (option: string) => void;
  dropdownRef?: RefCallBack;
}

/**
 * UserInfoDropdown 컴포넌트
 * @param  menuInfoType: 드랍메뉴 내용
 * @property {"position" | "career"}  menuInfoType
 * */
export default function UserInfoDropdown({ menuInfoType, onSelect, dropdownRef }: UserInfoDropdownProps) {
  const { user } = DROPDOWN_INFO;

  const [selectOption, setSelectOption] = useState(user[menuInfoType].defaultValue);
  const [isSelected, setIsSelected] = useState(false);
  const { isOpen, openToggle: toggleDropdown, ref } = useOpenToggle();
  const handleSelectOption = (option: string) => {
    onSelect(option);
    setSelectOption(option);
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
        dropButtonRef={dropdownRef}
      />
      <DropMenu
        isOpen={isOpen}
        handleSelectOption={handleSelectOption}
        $borderType="square"
        options={user[menuInfoType].options}></DropMenu>
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
  width: 31.4rem;

  ${mediaQueries.mobile} {
    width: 28rem;
  }
`;
