import FilterButton from "@/components/commons/FilterButton";
import { useState } from "react";
import SelectLayout from "./SelectLayout";
import styled from "styled-components";

export default function StacksPopover() {
  const [isButtonSelected, setIsButtonSelected] = useState<boolean>(false);
  const handleButtonClick = () => {
    setIsButtonSelected(!isButtonSelected);
  };

  return (
    <Container>
      <FilterButton selectOption="기술 스택" isSelected={isButtonSelected} onClick={handleButtonClick} />
      {isButtonSelected && <SelectLayout />}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;
