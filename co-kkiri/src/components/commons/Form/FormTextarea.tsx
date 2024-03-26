import styled from "styled-components";
import DefaultTextarea from "../Textarea";
import DESIGN_TOKEN from "@/styles/tokens";

interface FormTextAreaProps {
  id: string;
  placeholder: string;
  value: string;
  defaultContent?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isError?: boolean;
  helperText?: string;
}

export default function FormTextArea({
  id,
  placeholder,
  value,
  onChange,
  isError,
  helperText,
}: FormTextAreaProps) {
  return (
    <Container>
      <Textarea
        type="modal"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        $isError={isError}
        //화면 크기 감지해서 row 값 정해야함
        rows={5}
      />
      <HelperText>{helperText}</HelperText>
    </Container>
  );
}

const { color, typography } = DESIGN_TOKEN;

interface TextareaProps {
  $isError?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Textarea = styled(DefaultTextarea)<TextareaProps>`
  border-color: ${({ $isError }) => $isError && `${color.red}`};
`;

const HelperText = styled.p`
  color: ${color.red};
  ${typography.font12Medium}
`;
