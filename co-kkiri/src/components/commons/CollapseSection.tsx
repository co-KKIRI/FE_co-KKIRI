import { ICONS } from "@/constants/icons";
import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

interface CollapseSectionProps {
  title: string;
  children: React.ReactNode;
  isCollapsed: boolean;
  onClick: () => void;
  className?: string;
}

export default function CollapseSection({ title, children, isCollapsed, onClick, className }: CollapseSectionProps) {
  return (
    <Container className={className}>
      <Header onClick={onClick}>
        <Icon src={ICONS.circleArrow.src} alt={ICONS.circleArrow.alt} $isCollapsed={isCollapsed} />
        <p>{title}</p>
      </Header>
      {!isCollapsed && <>{children}</>}
    </Container>
  );
}

const { color, typography } = DESIGN_TOKEN;

const Container = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  align-items: center;

  & > p {
    color: ${color.black[2]};
    ${typography.font12Semibold}
  }

  :hover {
    cursor: pointer;
  }
`;

const Icon = styled.img<{ $isCollapsed: boolean }>`
  width: 2.4rem;
  height: 2.4rem;

  ${({ $isCollapsed }) => $isCollapsed && `transform: rotate(180deg);`}
`;
