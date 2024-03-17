import styled, { css } from "styled-components";
import DefaultChip from "./DefaultChip";
import { VariantStyle } from "@/types/styledUtilTypes";
import { getTypeLabel } from "@/utils/getTypeLabel";

export type ProjectType = "STUDY" | "PROJECT";

interface ProjectChipProps {
  label: ProjectType; //나중에 global한 type으로 빼내어야함
}

export default function ProjectChip({ label }: ProjectChipProps) {
  return <Container label={getTypeLabel(label)} />;
}

type ProjectVariant = ProjectType;

const ProjectChipStyle = css`
  padding: 0.6rem 3rem;
  border-radius: 0.2rem 6.1rem 6.1rem 0.2rem;
`;
const VARIANT_STYLE: VariantStyle<ProjectVariant> = {
  STUDY: css`
    background-color: #daf4af;
    color: #588f00;
    ${ProjectChipStyle}
  `,
  PROJECT: css`
    background-color: #ffdbe4;
    color: #c71b44;
    ${ProjectChipStyle}
  `,
};

const Container = styled(DefaultChip)`
  ${({ label }) => VARIANT_STYLE[label as ProjectVariant]}
`;
