import { ReactNode } from "react";
import * as S from "./Button.styled";

export type ButtonVariant = "primary" | "ghost" | "red" | "primaryLight" | "floating";

interface Icon {
  src: string;
  alt: string;
}

interface ButtonProps {
  children?: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  variant: ButtonVariant;
  width?: number;
  icon?: Icon;
}

/**
 *
 * @property width - px단위
 * */
export default function Button({ children, onClick, disabled, variant, width, icon }: ButtonProps) {
  return (
    <S.Container onClick={onClick} disabled={disabled} $variant={variant} $width={width}>
      {icon && <S.ButtonIcon src={icon.src} alt={icon.alt} />}
      {children}
    </S.Container>
  );
}
