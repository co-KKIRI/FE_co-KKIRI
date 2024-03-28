import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

interface NoResultTextProps {
  text: string;
  padding: number;
  color: "black" | "gray";
}
export default function NoResultText({ text, padding, color }: NoResultTextProps) {
  return (
    <Wrapper $padding={padding} $color={color}>
      {text}
    </Wrapper>
  );
}

const { typography, color } = DESIGN_TOKEN;

interface WrapperProps {
  $padding: number;
  $color: "black" | "gray";
}

const Wrapper = styled.div<WrapperProps>`
  ${typography.font16Regular}
  width: 100%;
  text-align: center;
  padding: ${({ $padding }) => $padding && `${$padding / 10}rem 0;`};
  color: ${({ $color }) => ($color === "black" ? `${color.black[1]}` : `${color.gray[1]}`)};
`;
