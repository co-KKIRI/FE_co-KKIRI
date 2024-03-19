import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

const {
  color,
  typography: { font16Medium, font14Semibold },
} = DESIGN_TOKEN;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.2rem;
  width: 100%;
`;

export const TopBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const Button = styled.button`
  color: ${color.black[3]};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: normal;
`;

export const Date = styled.div`
  color: ${color.gray[1]};
  ${font14Semibold}
`;

export const Text = styled.div`
  color: ${color.black[2]};
  ${font16Medium}
`;

export const ColumnDivider = styled.div`
  width: 0.1rem;
  height: 0.8rem;
  flex-shrink: 0;
  background: ${color.gray[2]};
`;

export const HorizontalDivider = styled.div`
  width: 100%;
  height: 0.1rem;
  background: ${color.gray[2]};
  margin-top: 0.4rem;
  margin-bottom: 2rem;
`;
