import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import { ICONS } from "@/constants/icons";

//임시
interface Stack {
  name: string;
  img: string;
}

interface StacksProps {
  stack: Stack[];
}

export default function Stacks({ stack }: StacksProps) {
  return (
    <Wrapper>
      {stack.length > 0 ? (
        stack.map(({ name, img }) => (
          <Background key={name}>
            <img src={img} />
          </Background>
        ))
      ) : (
        <Background>
          <QuestionMark src={ICONS.questionMark.src} alt={ICONS.questionMark.alt} />
        </Background>
      )}
    </Wrapper>
  );
}

const { color } = DESIGN_TOKEN;

const Wrapper = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const Background = styled.div`
  background-color: ${color.gray[3]};
  border-radius: 50%;
  width: 3.6rem;
  height: 3.6rem;
  position: relative;
`;

const QuestionMark = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
