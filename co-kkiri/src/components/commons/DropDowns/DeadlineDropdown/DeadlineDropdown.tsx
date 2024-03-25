import { format } from "date-fns";

import "@/styles/globals.css";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

import useOpenToggle from "@/hooks/useOpenToggle";
import SquareDropButton from "../commons/SquareDropButton";
import { Calendar } from "./ui/calendar";
interface DeadlineDropdownProps {
  placeholder: string | null;
  selectedOption: string;
  onSelect: (option: string) => void;
}

export default function DeadlineDropdown({ placeholder, selectedOption, onSelect }: DeadlineDropdownProps) {
  const { isOpen, openToggle: toggleDropdown, ref } = useOpenToggle();

  const handleSelectDate = (date: Date | undefined) => {
    const formattedDate = date ? format(date, "yyyy-MM-dd 23:59:59") : "";
    onSelect(formattedDate);
  };

  return (
    <Container ref={ref}>
      <SquareDropButton
        $iconType="date"
        onClick={toggleDropdown}
        selectOption={selectedOption || placeholder || ""}
        $isSelected={!!selectedOption}
      />
      {isOpen && (
        <CalendarWrapper>
          <Calendar
            mode="single"
            selected={selectedOption ? new Date(selectedOption) : undefined}
            onSelect={handleSelectDate}
            initialFocus
          />
        </CalendarWrapper>
      )}
    </Container>
  );
}

const { mediaQueries, zIndex, color } = DESIGN_TOKEN;

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

const CalendarWrapper = styled.div`
  position: absolute;
  top: 5.4rem;
  left: 0;
  background-color: white;
  border-radius: 0.5rem;
  border: 0.1rem solid ${color.gray[2]};
  ${zIndex.dropdown}
`;
