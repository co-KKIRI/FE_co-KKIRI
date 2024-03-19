import Button from "@/components/commons/Button";
import styled from "styled-components";

interface MappedButtonProps {
  className?: string;
}

export default function MappedButton({ className }: MappedButtonProps) {
  return (
    <div className={className}>
      <StyledButton variant="primary">지원하기</StyledButton>
    </div>
  );
}

const StyledButton = styled(Button)``;
