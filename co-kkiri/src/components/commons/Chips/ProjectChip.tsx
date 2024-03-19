import styled, { css } from "styled-components";
import DefaultChip from "./DefaultChip";
import { VariantStyle } from "@/types/styledUtilTypes";
import { CategoryList } from "@/types/categoryTypes";

interface ProjectChipProps {
  label: CategoryList;
}

export default function ProjectChip({ label }: ProjectChipProps) {
  const getTypeLabel = (type: CategoryList) => {
    switch (type) {
      case "STUDY":
        return "스터디";
      case "PROJECT":
        return "프로젝트";
    }
  };
  return <Container label={getTypeLabel(label)} $labelDesign={label} />;
}

type ProjectVariant = CategoryList;

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

const Container = styled(DefaultChip)<{ $labelDesign: ProjectVariant }>`
  ${({ $labelDesign }) => VARIANT_STYLE[$labelDesign]}
`;
