import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

//임시
interface Stack {
  id: number;
  img: string;
}

interface StacksProps {
  stack: Stack[];
}

export default function Stacks({ stack }: StacksProps) {
  return (
    <Wrapper>
      {stack.map((item) => (
        <Background key={item.id}></Background>
      ))}
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
`;
