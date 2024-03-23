import { useLayoutEffect, useState } from "react";

import { useWindowSize } from "usehooks-ts";
import styled from "styled-components";

import StackComponent from "./Stack";
import DefaultChip from "./Chips/DefaultChip";
import useResponsiveSidebar from "@/hooks/useResponsiveSideBar";
import { STACKS } from "@/constants/stacks";
import { ICONS } from "@/constants/icons";
import { breakpoints } from "@/styles/tokens";
import { STACK_CHIP_LIMIT } from "@/constants/cardChipLimits";

interface StacksProps {
  stacks: string[];
  variant?: "card" | "profile";
}

export default function Stacks({ stacks, variant = "profile" }: StacksProps) {
  const [displayPositions, setDisplayPositions] = useState<string[]>(stacks);
  const { width: windowWidth } = useWindowSize();
  const isSidebarOpenNarrow = useResponsiveSidebar();

  useLayoutEffect(() => {
    if (variant === "card") {
      const { desktop } = breakpoints;
      const { mobile, desktopNarrow, desktopWide } = STACK_CHIP_LIMIT;

      let limit = mobile;

      if (windowWidth >= desktop) {
        limit = isSidebarOpenNarrow ? desktopNarrow : desktopWide;
      }
      setDisplayPositions(stacks.slice(0, limit));
    } else if (variant === "profile") {
      setDisplayPositions(stacks.slice(0, 3));
    }
  }, [variant, stacks, windowWidth, isSidebarOpenNarrow]);

  return (
    <Wrapper>
      {displayPositions.length === 0 ? (
        <StackComponent />
      ) : (
        displayPositions.map((stack) => <StackComponent key={stack} stack={STACKS[stack]} />)
      )}
      {variant === "card" && stacks.length > displayPositions.length && <MoreChip imgUrl={ICONS.more.src} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const MoreChip = styled(DefaultChip)`
  padding: 0;

  & div {
    display: flex; // DefaultChip의 mobile에서 Image가 none 되는 것을 막기 위해
  }

  & img {
    width: auto;
    height: auto;
  }
`;
