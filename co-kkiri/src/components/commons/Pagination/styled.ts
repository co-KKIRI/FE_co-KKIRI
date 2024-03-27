import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

const { typography, color } = DESIGN_TOKEN;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageNumber = styled.button<{ $active?: boolean }>`
  ${typography.font16Regular}
  width: 3rem;
  height: 3rem;
  text-align: center;
  border-radius: 50%;
  background-color: ${(props) => props.$active && `${color.primary[2]}`};
`;
