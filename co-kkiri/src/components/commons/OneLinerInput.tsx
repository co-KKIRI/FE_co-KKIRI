import { InputHTMLAttributes, forwardRef } from "react";
import { styled } from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

interface OneLinerInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
}

const OneLinerInput = forwardRef<HTMLInputElement, OneLinerInputProps>(
  ({ label, id, placeholder, value, maxLength, helperText, onChange, onBlur }, ref) => {
    return (
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <Input
          id={id}
          placeholder={placeholder}
          value={value}
          maxLength={maxLength}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
        />
        <p>{helperText}</p> {/*아직 스타일은 적용하지 않음*/}
      </Wrapper>
    );
  },
);

export default OneLinerInput;

const {
  color,
  typography: { font16Bold, font16Medium },
} = DESIGN_TOKEN;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Label = styled.label`
  color: ${color.black[1]};
  ${font16Bold};
`;

const Input = styled.input`
  ${font16Medium};
  background: ${color.white};
  border: 1px solid ${color.gray[2]};
  border-radius: 0.5rem;
  color: ${color.black[1]};
  padding: 1.4rem 2rem 1.5rem;
  width: 100%;

  &:focus {
    outline: none;
  }
`;
