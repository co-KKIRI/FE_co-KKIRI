import { MouseEvent } from "react";
import DESIGN_TOKEN from "@/styles/tokens";
import styled, { CSSProperties } from "styled-components";

interface DefaultChipProps {
  label: string;
  isSelected?: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  style?: DefaultChipContainerStyleProps;
  selectedStyle?: DefaultChipContainerStyleProps;
}

export default function DefaultChip({ label, isSelected, onClick, style, selectedStyle }: DefaultChipProps) {
  const currentStyle = isSelected ? selectedStyle : style;
  return (
    <Container {...currentStyle} onClick={onClick}>
      {label}
    </Container>
  );
}

export interface DefaultChipContainerStyleProps {
  $padding?: CSSProperties["padding"];
  $backgroundColor?: CSSProperties["backgroundColor"];
  $fontColor?: CSSProperties["color"];
  $borderRadius?: CSSProperties["borderRadius"];
}

const { color, typography } = DESIGN_TOKEN;

const Container = styled.div<DefaultChipContainerStyleProps>`
  width: fit-content;
  padding: ${({ $padding }) => $padding || `0.4rem 1.2rem`};

  background-color: ${({ $backgroundColor }) => $backgroundColor || color.gray[3]};
  color: ${({ $fontColor }) => $fontColor || color.black[3]};
  border-radius: ${({ $borderRadius }) => $borderRadius || `9999rem`};

  ${typography.font12Semibold}
`;
