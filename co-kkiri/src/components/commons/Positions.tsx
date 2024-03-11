import styled from "styled-components";
import PositionChip from "./Chips/PositionChip";

// 임시
interface Position {
  name: string;
}

interface PositionsProps {
  position: Position[];
}

export default function Positions({ position }: PositionsProps) {
  return (
    <Wrapper>
      {position.length > 0 ? (
        position.map(({ name }) => (
          <div key={name}>
            <PositionChip label={name} />
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
