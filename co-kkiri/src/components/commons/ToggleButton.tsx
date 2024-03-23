import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

interface ToggleButtonProps {
  content?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
}

export default function ToggleButton({ content, onChange, isChecked }: ToggleButtonProps) {
  return (
    <Wrapper>
      {content && <Content>{content}</Content>}
      <Toggle type="checkbox" role="toggle" onChange={onChange} checked={isChecked} />
    </Wrapper>
  );
}

const {
  color,
  typography: { font14Semibold },
} = DESIGN_TOKEN;

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 1.8rem;
  cursor: pointer;
`;

const Toggle = styled.input`
  cursor: pointer;

  &[type="checkbox"] {
    appearance: none;
    position: relative;
    background-color: ${color.gray[2]};
    border-radius: 2.5rem;
    width: 4.2rem;
    height: 2.4rem;
    transition: background-color 0.2s linear;

    &::before {
      content: "";
      position: absolute;
      top: 0.3rem;
      left: 0.3rem;
      background-color: ${color.white};
      border-radius: 50%;
      width: 1.8rem;
      height: 1.8rem;
      transition: left 0.2s linear;
    }

    &:checked {
      background-color: ${color.secondary};

      &::before {
        background-color: ${color.white};
        left: 2.1rem;
      }
    }
  }
`;

const Content = styled.span`
  ${font14Semibold};
  color: ${color.black[2]};
`;
