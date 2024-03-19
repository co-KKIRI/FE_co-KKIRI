import { useState } from "react";
import { format } from "date-fns";

import "@/styles/globals.css";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

import useOpenToggle from "@/hooks/useOpenToggle";
import SquareDropButton from "../commons/SquareDropButton";
import { Calendar } from "./ui/calendar";

export default function DeadlineDropdown() {
  const [selectOption, setSelectOption] = useState<Date>();
  const [isSelected, setIsSelected] = useState(false);
  const { isOpen, openToggle: toggleDropdown, ref } = useOpenToggle();
  const date = selectOption ? format(selectOption, "yyyy.MM.dd") : "마감 기간";
  return (
    <Container ref={ref}>
      <SquareDropButton $iconType="date" onClick={toggleDropdown} selectOption={date} $isSelected={isSelected} />
      {isOpen && <Calendar mode="single" selected={selectOption} onSelect={setSelectOption} initialFocus />}
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
