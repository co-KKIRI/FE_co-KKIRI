import styled from "styled-components";
import PositionChip from "./Chips/PositionChip";

interface PositionsProps {
  positions: string[];
}

export default function Positions({ positions }: PositionsProps) {
  return (
    <Wrapper>
      {positions.length > 0 ? (
        positions.map((position) => (
          <div key={position}>
            <PositionChip label={position} />
          </div>
        ))
      ) : (
        <PositionChip label="포지션" />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 0.6rem;
`;
