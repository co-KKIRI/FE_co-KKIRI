import { ReactNode } from "react";
import * as S from "./Button.styled";

export type ButtonVariant = "primary" | "ghost" | "red" | "primaryLight" | "floating";

interface Icon {
  src: string;
  alt: string;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  variant: ButtonVariant;
  width?: number;
  icon?: Icon;
}

/**
 * Button 컴포넌트
 * children, onClick, disabled, variant, width, icon 속성을 가집니다.
 * onClick, variant는 필수 입력값입니다.
 * @property {string} variant - 버튼 디자인 "primary" | "ghost" | "red" | "primaryLight" | "floating"
 * @property {number} width - px단위로 입력. 입력하지 않을 경우 width:100% 로 설정
 * @property {object} icon - icon.js에서 필요한 아이콘의 객체를 입력
 * */
export default function Button({ children, onClick, disabled, variant, width, icon, className }: ButtonProps) {
  return (
    <S.Container onClick={onClick} disabled={disabled} $variant={variant} $width={width} className={className}>
      {icon && <S.ButtonIcon src={icon.src} alt={icon.alt} />}
      {children}
    </S.Container>
  );
}
