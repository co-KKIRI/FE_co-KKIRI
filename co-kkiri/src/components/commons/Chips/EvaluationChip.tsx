import styled, { css } from "styled-components";
import DefaultChip from "./DefaultChip";
import { VariantStyle } from "@/types/styledUtilTypes";
import DESIGN_TOKEN from "@/styles/tokens";
import { EVALUATION_COMMENT } from "@/constants/evaluationChip";

interface EvaluationChipProps {
  label: string;
}

export default function EvaluationChip({ label }: EvaluationChipProps) {
  const { compliments, improvements } = EVALUATION_COMMENT;

  label = compliments.member[label] || compliments.team[label] ? "compliments" : "improvements";

  return <Container label={label} />;
}

const { color } = DESIGN_TOKEN;

const EvaluationChipStyle = css`
  padding: 0.35rem 1.2rem;
  border-radius: 9.9rem;
`;

const VARIANT_STYLE: VariantStyle<string> = {
  compliments: css`
    background-color: ${color.primary[3]};
    color: ${color.primary[1]};
    ${EvaluationChipStyle}
  `,
  improvements: css`
    background-color: #ffdbe4;
    color: ${color.red[1]};
    ${EvaluationChipStyle}
  `,
};

const Container = styled(DefaultChip)`
  ${({ label }) => VARIANT_STYLE[label]}
`;
