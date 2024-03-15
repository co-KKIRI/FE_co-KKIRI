import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import { ICONS } from "@/constants/icons";
import { STACK_ICONS } from "@/constants/stackIcons";

interface StackProps {
  stack?: string;
}

export default function Stack({ stack }: StackProps) {
  //임시
  const icon = stack && STACK_ICONS[stack] ? STACK_ICONS[stack] : ICONS.questionMark;
  return (
    <Background>
      <Icon src={icon.src} alt={icon.alt} />
    </Background>
  );
}

const { color } = DESIGN_TOKEN;

const Background = styled.div`
  background-color: ${color.gray[3]};
  border-radius: 50%;
  width: 3.6rem;
  height: 3.6rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  //임시
  max-width: 2.4rem;
  max-height: 2.4rem;
`;
