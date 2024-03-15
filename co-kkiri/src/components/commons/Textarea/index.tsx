import { forwardRef } from "react";
import * as S from "./Textarea.styled";

export type TextareaType = "comment" | "modal";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  type: TextareaType;
  defaultContent?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { id, type, placeholder, value, onChange, ...props },
  ref,
) {
  return (
    <S.StyledTextarea
      id={id}
      name={id}
      $type={type}
      placeholder={placeholder}
      value={value || ""}
      onChange={onChange}
      ref={ref}
      {...props}
    />
  );
});

export default Textarea;
