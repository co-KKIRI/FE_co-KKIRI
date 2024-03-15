import styled from "styled-components";
import DropdownButton from "./commons/DropdownButton";
import { useState } from "react";
import useOpenToggle from "@/hooks/useOpenToggle";
import DESIGN_TOKEN from "@/styles/tokens";
import { DatePickerWithRange } from "../DatePickerWithRange";

export default function DeadlineDropdownButton() {
  const [selectOption, setSelectOption] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const { isOpen, openToggle: toggleDropdown, ref } = useOpenToggle();

  return (
    <Container ref={ref}>
      <DropdownButton $selectType="date" onClick={toggleDropdown} selectOption="마감 기간" $isSelected={isSelected} />
      {isOpen && <DatePickerWithRange />}
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
