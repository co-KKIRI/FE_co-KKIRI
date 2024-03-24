import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

interface DividerProps {
  className?: string;
  isVertical?: boolean;
}

export default function Divider({ isVertical, className }: DividerProps) {
  return <Div className={className} $isVertical={isVertical} />;
}

const { color } = DESIGN_TOKEN;

interface DividerProps {
  $isVertical?: boolean;
}

const Div = styled.div<DividerProps>`
  ${({ $isVertical }) => ($isVertical ? "width: 0.1rem; height: 100%;" : "height: 0.1rem; width: 100%;")}
  background-color: ${color.gray[2]};
`;
