import styled from "styled-components";
import StackComponent from "./Stack";
import { STACKS } from "@/constants/stacks";

interface StacksProps {
  stacks: string[];
}

export default function Stacks({ stacks }: StacksProps) {
  return (
    <Wrapper>{stacks.length > 0 ? stacks.map((stack) => <StackComponent key={stack} stack={STACKS[stack]} />) : <StackComponent />}</Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 0.6rem;
`;
