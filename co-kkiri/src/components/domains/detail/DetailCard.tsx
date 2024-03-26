import ProjectDetailCard from "@/components/commons/ProjectDetailCard";
import { PostDetailApiResponseDto } from "@/lib/api/post/type";
import { formatDate } from "@/utils/formatDate";

interface DetailCardProps {
  detailInfo: PostDetailApiResponseDto;
  className?: string;
  cardRef: React.RefObject<HTMLDivElement>;
}

export default function DetailCard({ detailInfo, className, cardRef }: DetailCardProps) {
  const { type, recruitEndAt, progressPeriod, positions, progressWay, contactWay, capacity, stacks } = detailInfo;

  return (
    <div className={className} ref={cardRef}>
      <ProjectDetailCard
        ProjectCategory={type}
        recruitEndAt={formatDate(recruitEndAt)}
        progressPeriod={progressPeriod}
        positions={positions}
        progressWay={progressWay}
        contactWay={{ label: contactWay, to: "https://www.naver.com", linkType: "external"}}
        capacity={capacity}
        stacks={stacks}
      />
    </div>
  );
}
