import ProjectDetailCard from "@/components/commons/ProjectDetailCard";
import { ContactWay } from "@/components/commons/ProjectDetailCard/types";
import { PostDetails } from "@/lib/api/post/type";
import { formatDate } from "@/utils/formatDate";

interface DetailCardProps {
  postDetails: PostDetails;
  className?: string;
  cardRef: React.RefObject<HTMLDivElement>;
}

export default function DetailCard({ postDetails, className, cardRef }: DetailCardProps) {
  const { type, recruitEndAt, progressPeriod, positions, progressWay, contactWay, capacity, stacks, link } =
    postDetails;

  return (
    <div className={className} ref={cardRef}>
      <ProjectDetailCard
        ProjectCategory={type}
        recruitEndAt={formatDate(recruitEndAt)}
        progressPeriod={progressPeriod}
        positions={positions}
        progressWay={progressWay}
        contactWay={{ label: contactWay as ContactWay, content: link }}
        capacity={capacity}
        stacks={stacks}
      />
    </div>
  );
}
