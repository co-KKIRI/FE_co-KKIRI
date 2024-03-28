import React from "react";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import { DROPDOWN_FORM_INFO, DROPDOWN_INFO } from "@/constants/dropDown";

interface LinkInputProps {
  contactWayValue: string;
  onChange: (value: string) => void;
}

export default function LinkInput({ onChange, contactWayValue }: LinkInputProps) {
  const placeholder: { [key: string]: string } = {
    "카카오 오픈톡": "오픈채팅 링크",
    이메일: "이메일 주소",
    구글폼: "구글폼 주소",
  };

  return (
    <Container>
      <Input placeholder={placeholder[contactWayValue]} onChange={(e) => onChange(e.target.value)} />
    </Container>
  );
}

const { color } = DESIGN_TOKEN;

const Container = styled.div`
  width: 100%;
  height: 4.8rem;
  position: relative;
  top: -1.5rem;
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
