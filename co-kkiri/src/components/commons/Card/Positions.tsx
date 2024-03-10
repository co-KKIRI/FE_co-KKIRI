import styled from "styled-components";
import PositionChip from "../Chips/PositionChip";

// 임시
interface Position {
  id: number;
  name: string;
}

interface PositionsProps {
  position: Position[];
}

export default function Positions({ position }: PositionsProps) {
  return (
    <Wrapper>
      {position.length > 0 ? (
        position.map((item) => (
          <div key={item.id}>
            <PositionChip label={item.name} />
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
