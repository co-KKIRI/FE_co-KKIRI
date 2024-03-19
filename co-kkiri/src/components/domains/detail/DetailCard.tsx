import ProjectDetailCard from "@/components/commons/ProjectDetailCard";
import { DetailInfo } from "@/lib/mock/studyDetail";
import { formatDate } from "@/utils/formatDate";

interface DetailCardProps {
  detailInfo: DetailInfo;
  className?: string;
}

export default function DetailCard({ detailInfo, className }: DetailCardProps) {
  const { type, recruitEndAt, progressPeriod, positions, progressWay, contactWay, capacity, stacks } = detailInfo;

  return (
    <div className={className}>
      <ProjectDetailCard
        ProjectCategory={type}
        recruitEndAt={formatDate(recruitEndAt)}
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
