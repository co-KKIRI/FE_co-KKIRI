import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import styled from "styled-components";
import PositionChip from "./Chips/PositionChip";
import useResponsiveSidebar from "@/hooks/useResponsiveSideBar";
import { breakpoints } from "@/styles/tokens";

interface PositionsProps {
  positions: string[];
  variant?: "card" | "profile";
  page?: "home" | "studyList";
}

export default function Positions({ positions, variant = "profile", page }: PositionsProps) {
  const [displayPositions, setDisplayPositions] = useState<string[]>(positions);
  const { width: windowWidth } = useWindowSize();
  const isSidebarOpenNarrow = useResponsiveSidebar();

  useEffect(() => {
    if (variant === "card") {
      const { tablet, desktop } = breakpoints;
      let limit = 2;

      if (windowWidth >= tablet) {
        limit = 3;
        if (windowWidth >= desktop) {
          limit = isSidebarOpenNarrow ? (page === "home" ? 4 : 3) : 2;
        }
      }
      setDisplayPositions(positions.slice(0, limit));
    }
  }, [windowWidth, positions, isSidebarOpenNarrow, variant, page]);

  return (
    <Wrapper>
      {variant === "profile" && displayPositions.length === 0 ? (
        <PositionChip label="포지션" />
      ) : (
        displayPositions.map((position) => <PositionChip key={position} label={position} />)
      )}
      {variant === "card" && positions.length > displayPositions.length && <PositionChip label="..." />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 0.6rem;
`;
