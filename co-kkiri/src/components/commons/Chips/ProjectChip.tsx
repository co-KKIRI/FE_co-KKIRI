import styled, { css } from "styled-components";
import DefaultChip from "./DefaultChip";
import { VariantStyle } from "@/types/styledUtilTypes";

export type ProjectType = "스터디" | "프로젝트";

interface ProjectChipProps {
  label: ProjectType; //나중에 global한 type으로 빼내어야함
}

export default function ProjectChip({ label }: ProjectChipProps) {
  return <Container label={label}/>;
}


type ProjectVariant = ProjectType;

const ProjectChipStyle = css`
  padding: .6rem 3rem;
  border-radius: .2rem 6.1rem 6.1rem .2rem;
  `
  ;

const VARIANT_STYLE: VariantStyle<ProjectVariant> = {
  '스터디': css`
    background-color: #DAF4AF;
    color: #588F00;
    ${ProjectChipStyle}
    `
  ,
  '프로젝트': css`
    background-color: #FFDBE4;
    color:#C71B44;
    ${ProjectChipStyle}
  `
}

const Container = styled(DefaultChip)`
  ${({ label }) => VARIANT_STYLE[label as ProjectVariant]}
`