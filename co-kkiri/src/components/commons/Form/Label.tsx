import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

interface LabelProps {
  label: string;
  isEssential?: boolean;
}

export default function Label({ label, isEssential }: LabelProps) {
  return (
    <Container>
      {label}
      {isEssential && <span> *</span>}
    </Container>
  );
}

const { color, typography } = DESIGN_TOKEN;

const Container = styled.label`
  color: ${color.black[1]};
  ${typography.font16Bold}

  & > span {
    color: ${color.red};
  }
`;
