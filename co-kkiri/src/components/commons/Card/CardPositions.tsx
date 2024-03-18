import { useState, useEffect } from "react";
import { useWindowSize } from "usehooks-ts";

import styled from "styled-components";

import useResponsiveSidebar from "@/hooks/useResponsiveSideBar";
import PositionChip from "../Chips/PositionChip";
import { breakpoints } from "@/styles/tokens";

interface PositionsProps {
  positions: string[];
}

export default function Positions({ positions }: PositionsProps) {
  const { width: windowWidth } = useWindowSize();
  const isSidebarOpenNarrow = useResponsiveSidebar();
  const [displayPositions, setDisplayPositions] = useState<string[]>([]);

  useEffect(() => {
    const { tablet, desktop } = breakpoints;
    let limit = 2;

    if (windowWidth >= tablet) {
      limit = 3;
      if (windowWidth >= desktop) {
        limit = isSidebarOpenNarrow ? 4 : 2;
      }
    }

    setDisplayPositions(positions.slice(0, limit));
  }, [windowWidth, positions, isSidebarOpenNarrow]);

  return (
    <Wrapper>
      {displayPositions.map((position) => (
        <div key={position}>
          <PositionChip label={position} />
        </div>
      ))}
      {positions.length > displayPositions.length && <PositionChip label="..." />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 0.6rem;
`;
