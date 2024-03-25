import PositionChip from "@/components/commons/Chips/PositionChip";
import DESIGN_TOKEN from "@/styles/tokens";
import { useCallback } from "react";
import styled from "styled-components";
import { ContentType, RenderType } from "./types";
import DefaultStacks from "../Stacks";
import DefaultPositions from "../Positions";

export interface ProjectDetailRowProps {
  label: string;
  content: ContentType;
  renderType: RenderType;
}

export default function ProjectDetailRow({ label, content, renderType }: ProjectDetailRowProps) {
  //Chip이랑 Icon은 배열이어야만 정상적으로 render함
  const renderContent = useCallback(() => {
    switch (renderType) {
      case "text":
        return <p>{content}</p>;
      case "capacity":
        return <p>{content}명</p>;
      case "positions":
        if (Array.isArray(content)) {
          return <Positions positions={content} />;
        }
        break;
      case "stacks":
        if (Array.isArray(content)) {
          return <Stacks stacks={content} />;
        }
    }
  }, [content, renderType]);

  return (
    <Container>
      <Label>
        <span>{label}</span>
      </Label>
      {renderContent()}
    </Container>
  );
}

const { color, typography } = DESIGN_TOKEN;

const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;

  ${typography.font16Semibold}

  & > .text {
    color: ${color.black[1]};
  }
`;

const Label = styled.div`
  width: 10rem;
  color: ${color.gray[1]};
`;

const Positions = styled(DefaultPositions)`
  flex-wrap: wrap;
  flex-shrink: 1;
`;
const Stacks = styled(DefaultStacks)`
  flex-wrap: wrap;
  flex-shrink: 1;
  gap: 0.8rem;
`;
