import DefaultChip from "./DefaultChip";

interface PositionChipProps {
  label: string;
}

export default function PositionChip({ label }: PositionChipProps) {
  return <DefaultChip label={label} />;
}
