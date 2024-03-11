import { MouseEvent } from "react";
import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

interface DefaultChipProps {
  label: string;
  isSelected?: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  isVertical?: boolean;
  className?: string;
}

export default function DefaultChip({ label, isSelected, onClick, isVertical, className }: DefaultChipProps) {
  return (
    <Container className={className} $isVertical={isVertical} $isSelected={isSelected} onClick={onClick}>
      {label}
    </Container>
  );
}

/**
 * @param $isVertical: boolean - 세로로 배치할지 여부
 * @param $isSelected: boolean - 선택되었는지 여부
 */
export interface DefaultChipContainerStyleProps {
  $isVertical?: boolean;
  $isSelected?: boolean;
}

const { color, typography } = DESIGN_TOKEN;

const Container = styled.div<DefaultChipContainerStyleProps>`
  width: fit-content;
  padding: 0.4rem 1.2rem;

  display: flex;

  background-color: ${color.gray[3]};
  color: ${color.black[3]};
  border-radius: 9999rem;

  ${typography.font12Semibold}

  ${({ $isVertical }) => $isVertical ? `
      flex-direction: column;
      align-items: center;
      gap: .4rem
    ` : `
      flex-direction: row;
      align-items: center;
      gap: 1.2rem
      `
  })
`;
