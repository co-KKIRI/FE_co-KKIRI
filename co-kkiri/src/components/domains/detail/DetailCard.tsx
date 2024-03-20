import ProjectDetailCard from "@/components/commons/ProjectDetailCard";
import { DetailInfo } from "@/lib/mock/studyDetail";

interface DetailCardProps {
  detailInfo: DetailInfo;
  className?: string;
  cardRef: React.RefObject<HTMLDivElement>;
}

export default function DetailCard({ detailInfo, className, cardRef }: DetailCardProps) {
  const { type, recruitEndAt, progressPeriod, positions, progressWay, contactWay, capacity, stacks } = detailInfo;

  return (
    <div className={className} ref={cardRef}>
      <ProjectDetailCard
        ProjectCategory={type}
        recruitEndAt={recruitEndAt}
        progressPeriod={progressPeriod}
        positions={positions}
        progressWay={progressWay}
        contactWay={contactWay}
        capacity={capacity}
        stacks={stacks}
      />
    </div>
  );
}
