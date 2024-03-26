import React from "react";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import { DROPDOWN_INFO } from "@/constants/dropDown";

interface LinkInputProps {
  selectedOption: string;
  onChange: (value: string) => void;
  onBlur: () => void; // onBlur 추가
}

export default function LinkInput({ selectedOption, onChange, onBlur }: LinkInputProps) {
  const { recruitment } = DROPDOWN_INFO;
  const optionIndex = recruitment.contactWay.options.indexOf(selectedOption);
  const value = selectedOption ? String(recruitment.contactWay.placeholder[optionIndex]) : "";

  return (
    <Container>
      {selectedOption !== "기타" && (
        <Input placeholder={value} onChange={(e) => onChange(e.target.value)} onBlur={onBlur} /> // onBlur 속성 추가
      )}
    </Container>
  );
}

const { color } = DESIGN_TOKEN;

const Container = styled.div`
  width: 100%;
  height: 4.8rem;
`;

const Input = styled.input`
  width: 100%;
  height: 4.8rem;
  border-radius: 0.5rem;
  border: 0.1rem solid ${color.gray[2]};
  padding: 1.858rem;

  &:focus {
    outline: none;
  }
`;
