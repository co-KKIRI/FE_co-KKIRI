import StackChip from "@/components/commons/Chips/StackChip";
import { STACKS } from "@/constants/stacks";
import { StackPosition } from "@/types/StackTypes";

interface StackChipGridProps {
  filter: StackPosition;
  onStackChipClick: (stack: string) => void;
}

export default function StackChipGrid({ filter, onStackChipClick }: StackChipGridProps) {
  const filteredStacks = Object.values(STACKS).filter((stack) => stack.relatedPosition.includes(filter));
  return (
    <div>
      {filteredStacks.map((stack) => (
        <StackChip
          label={stack.name}
          imgUrl={stack.img}
          onClick={() => {
            onStackChipClick(stack.name);
          }}
        />
      ))}
    </div>
  );
}
