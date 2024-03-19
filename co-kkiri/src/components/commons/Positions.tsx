import { useEffect, useState } from "react";

import { useWindowSize } from "usehooks-ts";
import styled from "styled-components";

import PositionChip from "./Chips/PositionChip";
import DefaultChip from "./Chips/DefaultChip";
import useResponsiveSidebar from "@/hooks/useResponsiveSideBar";
import { breakpoints } from "@/styles/tokens";
import { ICONS } from "@/constants/icons";
import { POSITION_CHIP_LIMIT } from "@/constants/cardChipLimits";

interface PositionsProps {
  positions: string[];
  variant?: "card" | "profile";
  page?: "home" | "studyList";
}

export default function Positions({ positions, variant = "profile", page = "home" }: PositionsProps) {
  const [displayPositions, setDisplayPositions] = useState<string[]>(positions);
  const { width: windowWidth } = useWindowSize();
  const isSidebarOpenNarrow = useResponsiveSidebar();

  useEffect(() => {
    if (variant === "card") {
      const { tablet, desktop } = breakpoints;
      const pageLimits = POSITION_CHIP_LIMIT[page];

      let limit = pageLimits.mobile;

      if (windowWidth >= tablet) {
        limit = pageLimits.tablet;
      }

      if (windowWidth >= desktop) {
        limit = isSidebarOpenNarrow ? pageLimits.desktopNarrow : pageLimits.desktopWide;
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
      {variant === "card" && positions.length > displayPositions.length && <MoreChip icon={ICONS.more} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const MoreChip = styled(DefaultChip)`
  height: 2.2rem;
`;
