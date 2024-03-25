import MemberList from "@/components/domains/manage/MemberList";
import * as S from "./styled";
import AppliedList from "@/components/domains/manage/AppliedList";
import { getAppliedMemberList, getStudyManagement } from "@/lib/api/post";
import { useEffect, useState } from "react";
import { AppliedMemberListApiResponseDto, StudyManagementApiResponseDto } from "@/lib/api/post/type";
import { getTeamMember } from "@/lib/api/teamMember";
import { TeamMemberApiResponseDto } from "@/lib/api/teamMember/type";
import { useQuery } from "@tanstack/react-query";

interface ManageProps {
  postId: StudyManagementApiResponseDto["postId"];
}

export default function Manage({ postId }: ManageProps) {
  const [detailInfo, setDetailInfo] = useState<StudyManagementApiResponseDto>();
  const [appliedMemberList, setAppliedMemberList] = useState<AppliedMemberListApiResponseDto["data"]>([]);
  const [memberList, setMemberList] = useState<TeamMemberApiResponseDto["data"]>([]);

  const {
    data: detailInfoData,
    error,
    isError,
  } = useQuery({
    queryKey: ["management", postId],
    queryFn: () => getStudyManagement(postId),
  });
  const {
    data: appliedMemberListData,
    error: appliedMemberListError,
    isError: isAppliedMemberListError,
  } = useQuery({
    queryKey: ["appliedMemberList", postId],
    queryFn: () => getAppliedMemberList(postId, { order: "DESC", page: 1, take: 100 }),
  });
  const {
    data: memberListData,
    error: memberListError,
    isError: isMemberListError,
  } = useQuery({
    queryKey: ["memberList", postId],
    queryFn: () => getTeamMember(postId, { order: "DESC", page: 1, take: 5 }),
  });

  if (isError) {
    console.error(error);
  }

  if (isAppliedMemberListError) {
    console.error(appliedMemberListError);
  }

  if (isMemberListError) {
    console.error(memberListError);
  }

  useEffect(() => {
    if (detailInfoData) {
      setDetailInfo(detailInfoData);
    }
  }, [detailInfoData]);

  useEffect(() => {
    if (appliedMemberListData) {
      setAppliedMemberList(appliedMemberListData.data);
    }
  }, [appliedMemberListData]);

  useEffect(() => {
    if (memberListData) {
      setMemberList(memberListData.data);
    }
  }, [memberListData]);

  return (
    <S.Container>
      <S.Box>
        {detailInfo && <S.DetailSection detailInfo={detailInfo} />}
        <S.ListSection>
          <AppliedList detailInfo={appliedMemberList} />
          <MemberList detailInfo={memberList} />
        </S.ListSection>
        {detailInfo && <S.ButtonSection buttonType={detailInfo.status} isLeader={detailInfo.isLeader} />}
      </S.Box>
    </S.Container>
  );
}
