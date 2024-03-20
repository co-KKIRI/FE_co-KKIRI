import { InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { styled } from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

interface TextFieldInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isRequired?: boolean;
  isError: FieldError | undefined;
  helperText?: string;
  className?: string;
}

const TextFieldInput = forwardRef<HTMLInputElement, TextFieldInputProps>(
  ({ label, id, value, placeholder = "", isRequired = false, isError, helperText = "", className, ...props }, ref) => {
    return (
      <Wrapper className={className}>
        <Label htmlFor={id}>
          {label}
          {isRequired && <span className="required-mark"> *</span>}
        </Label>
        <Input $isError={isError} id={id} value={value} placeholder={placeholder} ref={ref} {...props} />
        <Text>{helperText}</Text>
      </Wrapper>
    );
  },
);

export default TextFieldInput;

const {
  color,
  typography: { font12Medium, font16Bold, font16Medium },
} = DESIGN_TOKEN;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Label = styled.label`
  color: ${color.black[1]};
  ${font16Bold};
  margin-bottom: 0.4rem;

  & .required-mark {
    color: ${color.red};
  }
`;

const Input = styled.input<{ $isError: FieldError | undefined }>`
  ${font16Medium};
  background: ${color.white};
  border: 1px solid ${({ $isError }) => ($isError ? color.red : color.gray[2])};
  border-radius: 0.5rem;
  color: ${color.black[1]};
  padding: 1.4rem 2rem 1.5rem;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${color.gray[2]};
  }
`;

const Text = styled.p`
  ${font12Medium}
  color: ${color.red};
  height: 1.4rem;
`;
