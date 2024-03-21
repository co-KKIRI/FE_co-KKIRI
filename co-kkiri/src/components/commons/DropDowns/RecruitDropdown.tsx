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
  onChange?: (Link: string) => void;
}

/**
 * RecruitDropdown 컴포넌트
 * @param  menuInfoType: 드랍메뉴 내용
 * @property {"progressWay" | "capacity" | "progressPeriod" | "contactWay"} menuInfoType
 * */
export default function RecruitDropdown({ menuInfoType, onClick, onChange }: RecruitDropdownProps) {
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

  const handleSelectLink = (link: string) => {
    onChange?.(link);
  };

  const placeholderText: { [key: string]: string } = {
    "카카오 오픈톡": "오픈톡 링크",
    이메일: "이메일 주소",
    구글폼: "구글폼 링크",
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
      {menuInfoType === "contactWay" && (
        <LinkInput
          onChange={(e) => {
            handleSelectLink(e.target.value);
          }}
          placeholder={placeholderText[selectOption]}
        />
      )}
    </Container>
  );
}

const { mediaQueries, color } = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  position: relative;
  padding: 0;
  width: 36.7rem;
  gap: 0.8rem;

  ${mediaQueries.tablet} {
    width: 46.2rem;
  }

  ${mediaQueries.mobile} {
    width: 32rem;
  }
`;

const LinkInput = styled.input`
  height: 4.8rem;
  padding: 0 2rem;
  border: 0.1rem solid ${color.gray[2]};
  border-radius: 0.5rem;
  width: 100%;

  &:focus {
    outline: none;
  }
`;
