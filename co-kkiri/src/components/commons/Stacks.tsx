import styled from "styled-components";
import Stack from "./Stack";

interface StacksProps {
  stacks: string[];
}

export default function Stacks({ stacks }: StacksProps) {
  return (
    <Wrapper>{stacks.length > 0 ? stacks.map((stack) => <Stack key={stack} stack={stack} />) : <Stack />}</Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 0.6rem;
`;
