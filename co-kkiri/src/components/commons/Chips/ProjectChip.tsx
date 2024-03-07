import DefaultChip, { DefaultChipContainerStyleProps } from "./DefaultChip";

interface ProjectChipProps {
  label: "스터디" | "프로젝트"; //나중에 global한 type으로 빼내어야함
}

const ProjectChipStyle: DefaultChipContainerStyleProps = {
  $padding: `.6rem 3rem`,
  $borderRadius: `.2rem 6.1rem 6.1rem .2rem`,
};

const studyProjectChipStyle: DefaultChipContainerStyleProps = {
  $backgroundColor: `#DAF4AF`,
  $fontColor: `#588F00`,
  ...ProjectChipStyle,
};

const projectProjectChipStyle: DefaultChipContainerStyleProps = {
  $backgroundColor: `#FFDBE4`,
  $fontColor: `#C71B44`,
  ...ProjectChipStyle,
};

export default function ProjectChip({ label }: ProjectChipProps) {
  const projectChipStyle = label === "스터디" ? studyProjectChipStyle : projectProjectChipStyle;
  return <DefaultChip label={label} style={projectChipStyle} />;
}
