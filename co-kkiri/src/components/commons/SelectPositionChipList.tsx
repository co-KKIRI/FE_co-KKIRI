import styled from "styled-components";
import SelectPositionChip from "./Chips/SelectPositionChip";
import DESIGN_TOKEN from "@/styles/tokens";

interface SelectPositionChipListProps {
  selectedPositions: string[];
  onChipClick: (position: string) => void;
}

export default function SelectPositionChipList({ selectedPositions, onChipClick }: SelectPositionChipListProps) {
  const positions = ["전체", "프론트엔드", "백엔드", "디자이너", "IOS", "안드로이드", "데브옵스"];

  return (
    <div>
      {positions.map((position) => (
        <SelectPositionChiStyled
          key={position}
          label={position}
          isSelected={selectedPositions.includes(position)}
          onClick={() => {
            onChipClick(position);
          }}
        />
      ))}
    </div>
  );
}

const { mediaQueries, typography } = DESIGN_TOKEN;

const SelectPositionChiStyled = styled(SelectPositionChip)`
  ${mediaQueries.mobile} {
    ${typography.font12Medium}
  }
`;
