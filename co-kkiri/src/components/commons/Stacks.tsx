import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import styled from "styled-components";
import StackComponent from "./Stack";
import useResponsiveSidebar from "@/hooks/useResponsiveSideBar";
import { STACKS } from "@/constants/stacks";
import { breakpoints } from "@/styles/tokens";

interface StacksProps {
  stacks: string[];
  variant?: "card" | "profile";
}

export default function Stacks({ stacks, variant = "profile" }: StacksProps) {
  const [displayPositions, setDisplayPositions] = useState<string[]>(stacks);
  const { width: windowWidth } = useWindowSize();
  const isSidebarOpenNarrow = useResponsiveSidebar();

  useEffect(() => {
    if (variant === "card") {
      const { desktop } = breakpoints;
      let limit = 5;

      if (windowWidth >= desktop) {
        limit = 4;
      }
      setDisplayPositions(stacks.slice(0, limit));
    }
  }, [windowWidth, stacks, isSidebarOpenNarrow, variant]);

  return (
    <Wrapper>
      {displayPositions.length === 0 ? (
        <StackComponent />
      ) : (
        displayPositions.map((stack) => <StackComponent key={stack} stack={STACKS[stack]} />)
      )}
      {variant === "card" && stacks.length > displayPositions.length && <StackComponent className="more" />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 0.6rem;
`;
