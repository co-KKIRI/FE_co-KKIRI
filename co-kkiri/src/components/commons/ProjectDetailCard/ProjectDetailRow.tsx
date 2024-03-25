import DESIGN_TOKEN from "@/styles/tokens";
import { useCallback } from "react";
import styled from "styled-components";
import { ContentType, RenderType } from "./types";
import DefaultStacks from "../Stacks";
import DefaultPositions from "../Positions";
import Link from "../Link";
import { ICONS } from "@/constants/icons";

export interface ProjectDetailRowProps {
  label: string;
  content: ContentType;
  renderType: RenderType;
}

export default function ProjectDetailRow({ label, content, renderType }: ProjectDetailRowProps) {
  //positions이랑 stacks은 배열이어야만 정상적으로 render함
  const renderContent = useCallback(() => {
    switch (renderType) {
      case "text":
        if (typeof content === "string") {
          return <p>{content}</p>;
        }
        break;
      case "capacity":
        if (typeof content === "number") {
          return <p>{content}명</p>;
        }
        break;
      case "positions":
        if (Array.isArray(content)) {
          return <Positions positions={content} />;
        }
        break;
      case "stacks":
        if (Array.isArray(content)) {
          return <Stacks stacks={content} />;
        }
        break;
      case "link":
        // 타입 가드를 사용하여 Link 컴포넌트임을 보장
        if (typeof content === "object" && "to" in content) {
          return <Link {...content} icon={ICONS.link} />;
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

  p {
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
