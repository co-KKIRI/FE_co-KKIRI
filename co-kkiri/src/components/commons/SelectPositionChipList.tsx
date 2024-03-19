import SelectPositionChip from "./Chips/SelectPositionChip";

interface SelectPositionChipListProps {
  selectedPositions: string[];
  onChipClick: (position: string) => void;
}

export default function SelectPositionChipList({ selectedPositions, onChipClick }: SelectPositionChipListProps) {
  const positions = ["전체", "프론트엔드", "백엔드", "디자이너", "IOS", "안드로이드", "데브옵스"];

  return (
    <div>
      {positions.map((position) => (
        <SelectPositionChip
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
