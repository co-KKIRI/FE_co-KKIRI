import PositionChip from "@/components/commons/Chips/PositionChip";
import DESIGN_TOKEN from "@/styles/tokens";
import { useCallback } from "react";
import styled from "styled-components";
import { ContentType, RenderType } from "./types";
import Stacks from "../Stacks";

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
          return (
            <div className="chip position">
              {content.map((item) => (
                <PositionChip key={item} label={item} />
              ))}
            </div>
          );
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
      <div className="label">
        <span>{label}</span>
      </div>
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

  & > .label {
    width: 10rem;
    color: ${color.gray[1]};
  }

  & > .text {
    color: ${color.black[1]};
  }

  & > .chip {
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 1;
  }

  & > .chip.position {
    gap: 0.6rem;
  }

  & > .chip.stack {
    gap: 0.8rem;
  }
`;
