import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

import { Link } from "react-router-dom";

interface MoreProps {
  path: string;
}

export default function More({ path }: MoreProps) {
  return (
    <Link to={path}>
      <Wrapper>더보기</Wrapper>
    </Link>
  );
}

const {
  color,
  typography: { font14Semibold },
} = DESIGN_TOKEN;

const Wrapper = styled.span`
  ${font14Semibold};
  color: ${color.primary[1]};
`;
