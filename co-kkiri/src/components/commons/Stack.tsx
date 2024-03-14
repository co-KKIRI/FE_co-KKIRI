import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import { ICONS } from "@/constants/icons";
import { STACK_ICONS } from "@/constants/stackIcons";

interface StackProps {
  stack?: string;
}

export default function Stack({ stack }: StackProps) {
  const icon = stack ? STACK_ICONS[stack] : undefined;
  return (
    <Background>
      {icon ? (
        <StackIcon src={icon.src} alt={icon.alt} />
      ) : (
        <EmptyIcon src={ICONS.questionMark.src} alt={ICONS.questionMark.alt} />
      )}
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
`;

const EmptyIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StackIcon = styled(EmptyIcon)`
  //임의 값 -> 디자인 완성되면 수정할 것
  width: 2.4rem;
  height: 2.4rem;
`;
