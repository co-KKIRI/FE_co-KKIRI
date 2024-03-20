import DESIGN_TOKEN from "@/styles/tokens";
import { ReactNode } from "react";
import styled from "styled-components";

interface InfoFieldProps {
  label: string;
  fleid: ReactNode;
  isRequired?: boolean;
}

export default function InfoField({ label, fleid, isRequired }: InfoFieldProps) {
  return (
    <Container>
      <Label>
        {label}
        {isRequired && <span> *</span>}
      </Label>
      {fleid}
    </Container>
  );
}

const { color, typography } = DESIGN_TOKEN;

const Container = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  ${typography.font16Bold}
`;

const CustonInput = styled.div`
  width: 100%;
  height: fit-content;
`;

const Label = styled.label`
  & > span {
    color: ${color.red};
  }
`;
