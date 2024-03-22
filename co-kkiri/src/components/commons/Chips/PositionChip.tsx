import DefaultChip from "./DefaultChip";

interface PositionChipProps {
  label: string;
  className?: string;
}

export default function PositionChip({ label, className }: PositionChipProps) {
  return <DefaultChip label={label} className={className} />;
}
