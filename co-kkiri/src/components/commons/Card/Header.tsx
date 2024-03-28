import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import { formatDate } from "@/utils/formatDate";

//임시
interface HeaderProps {
  deadline: string;
  progressWay: string;
  className?: string;
}

export default function Header({ deadline, progressWay, className }: HeaderProps) {
  return (
    <Container className={className}>
      <span>{`${formatDate(deadline)} 마감`}</span>
      <div></div>
      <span>{progressWay}</span>
    </Container>
  );
}

const {
  color,
  typography: { font12Semibold },
} = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  span {
    ${font12Semibold}
    color: ${color.black[3]}
  }

  div {
    width: 0.1rem;
    height: 0.8rem;
    background-color: ${color.black[3]};
  }
`;
