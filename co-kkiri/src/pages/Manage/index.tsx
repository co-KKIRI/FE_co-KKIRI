import MemberList from "@/components/domains/manage/MemberList";
import * as S from "./styled";
import AppliedList from "@/components/domains/manage/AppliedList";
import { getAppliedMemberList, getStudyManagement } from "@/lib/api/post";
import { StudyManagementApiResponseDto } from "@/lib/api/post/type";
import { getTeamMember } from "@/lib/api/teamMember";
import { useQuery } from "@tanstack/react-query";

interface ManageProps {
  postId: StudyManagementApiResponseDto["postId"];
}

export default function Manage({ postId }: ManageProps) {
  const { data: detailInfo, error } = useQuery({
    queryKey: ["management", postId],
    queryFn: () => getStudyManagement(postId),
  });
  const { data: appliedMemberList, error: appliedMemberListError } = useQuery({
    queryKey: ["appliedMemberList", postId],
    queryFn: () => getAppliedMemberList(postId, { order: "DESC", page: 1, take: 100 }),
  });
  const { data: memberList, error: memberListError } = useQuery({
    queryKey: ["memberList", postId],
    queryFn: () => getTeamMember(postId, { order: "DESC", page: 1, take: 5 }),
  });

  if (error) {
    console.error(error);
  }

  if (appliedMemberListError) {
    console.error(appliedMemberListError);
  }

  if (memberListError) {
    console.error(memberListError);
  }

  return (
    <S.Container>
      <S.Box>
        {detailInfo && <S.DetailSection detailInfo={detailInfo} />}
        <S.ListSection>
          {appliedMemberList && <AppliedList detailInfo={appliedMemberList.data} />}
          {memberList && <MemberList detailInfo={memberList.data} />}
        </S.ListSection>
        {detailInfo && <S.ButtonSection buttonType={detailInfo.status} isLeader={detailInfo.isLeader} />}
      </S.Box>
    </S.Container>
  );
}
