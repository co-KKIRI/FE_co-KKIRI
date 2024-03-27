import DESIGN_TOKEN from "@/styles/tokens";
import { useCallback } from "react";
import styled from "styled-components";
import { ContentType, RenderType } from "./types";
import DefaultStacks from "../Stacks";
import DefaultPositions from "../Positions";
import Link from "../Link";
import { ICONS } from "@/constants/icons";
import { getEmailLink } from "@/utils/validationUtils";

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
          return <RowContent>{content}</RowContent>;
        }
        break;
      case "capacity":
        if (typeof content === "number") {
          return <RowContent>{content}명</RowContent>;
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
      case "contactWay":
        // 타입 가드를 사용하여 Link 컴포넌트임을 보장
        if (typeof content === "object" && "label" in content) {
          switch (content.label) {
            case "기타": {
              return <RowContent>기타 {content.content || "afdasdfasdfaasdfadfasfadfasdf"}</RowContent>;
            }
            case "카카오 오픈톡": {
              return <Link label="카카오 오픈톡" to={content.content || ""} icon={ICONS.link} linkType="external" />;
            }
            case "구글폼": {
              return <Link label="구글폼" to={content.content || ""} icon={ICONS.link} linkType="external" />;
            }
            case "이메일": {
              return (
                <Link
                  label="이메일"
                  to={content.content ? getEmailLink(content.content) : ""}
                  icon={ICONS.link}
                  linkType="external"
                />
              );
            }
            default:
              return <p>준비 중</p>;
          }
        }
    }
  }, [content, renderType]);

  return (
    <Container>
      <Label>
        <span>{label}</span>
      </Label>
      <Box>{renderContent()}</Box>
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

const Box = styled.div`
  //Label의 크기만큼 작아짐
  width: calc(100% - 10rem);
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

const RowContent = styled.p`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
