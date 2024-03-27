import React from "react";
import styled from "styled-components";
import Label from "./Label";

export interface FormFieldProps {
  onChange: (value: string) => void;
  value: string;
  isError?: boolean;
  helperText?: string;
}

interface FormElementProps {
  label: string;
  isEssential?: boolean;
  FormFieldComponent: React.ReactElement<FormFieldProps>;
}

export default function FormElement({ label, isEssential, FormFieldComponent: InputComponent }: FormElementProps) {
  return (
    <Container>
      <Label label={label} isEssential={isEssential} />
      {InputComponent}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
