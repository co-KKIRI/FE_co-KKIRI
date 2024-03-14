import styled from "styled-components";
import DropdownMenu from "./commons/DropdownMenu";
import DropdownButton from "./commons/DropdownButton";
import { useState } from "react";
import useOpenToggle from "@/hooks/useOpenToggle";
import DESIGN_TOKEN from "@/styles/tokens";

interface UserInfoDropdownButtonProps {
  userInfoType: "position" | "career";
}

const UserInfoDefaultValue = {
  position: "포지션",
  career: "경력",
};

/**
 * UserInfoDropdownButton 컴포넌트
 * userInfoType에 따라 dropdown 옵션이 정해집니다.
 * @property {"position" | "career"} userInfoType
 * */
export default function UserInfoDropdownButton({ userInfoType }: UserInfoDropdownButtonProps) {
  const defaultValue = UserInfoDefaultValue[userInfoType];

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
        selectType={userInfoType}
        onClick={toggleDropdown}
        selectOption={selectOption}
        isSelected={isSelected}
      />
      <DropdownMenu
        isOpen={isOpen}
        handleSelectOption={handleSelectOption}
        selectType={userInfoType}
        borderType="square"></DropdownMenu>
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
