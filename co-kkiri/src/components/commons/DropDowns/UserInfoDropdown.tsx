import styled from "styled-components";
import DropMenu from "./commons/DropMenu";
import { useState } from "react";
import useOpenToggle from "@/hooks/useOpenToggle";
import DESIGN_TOKEN from "@/styles/tokens";
import SquareDropButton from "./commons/SquareDropButton";
import { DROPDOWN_INFO } from "@/constants/dropDown";

interface UserInfoDropdownProps {
  menuInfoType: "position" | "career";
}

/**
 * UserInfoDropdown 컴포넌트
 * @param  menuInfoType: 드랍메뉴 내용
 * @property {"position" | "career"}  menuInfoType
 * */
export default function UserInfoDropdown({ menuInfoType }: UserInfoDropdownProps) {
  const { user } = DROPDOWN_INFO;

  const [selectOption, setSelectOption] = useState(user[menuInfoType].defaultValue);
  const [isSelected, setIsSelected] = useState(false);
  const { isOpen, openToggle: toggleDropdown, ref } = useOpenToggle();

  const handleSelectOption = (option: string) => {
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
  gap: 0.6rem;
  position: relative;
  padding: 0;
  width: 31.4rem;

  ${mediaQueries.mobile} {
    width: 28rem;
  }
`;
