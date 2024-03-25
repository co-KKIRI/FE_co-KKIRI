import MemberList from "@/components/domains/manage/MemberList";
import * as S from "./styled";
import AppliedList from "@/components/domains/manage/AppliedList";
import { getAppliedMemberList, getStudyManagement } from "@/lib/api/post";
import { useEffect, useState } from "react";
import { AppliedMemberListApiResponseDto, StudyManagementApiResponseDto } from "@/lib/api/post/type";
import { acceptMember, deleteTeamMember, getTeamMember, rejectMember } from "@/lib/api/teamMember";
import { TeamMemberApiResponseDto } from "@/lib/api/teamMember/type";

interface ManageProps {
  postId: StudyManagementApiResponseDto["postId"];
}

export default function Manage({ postId = 1 }: ManageProps) {
  const [detailInfo, setDetailInfo] = useState<StudyManagementApiResponseDto>();
  const [appliedMemberList, setAppliedMemberList] = useState<AppliedMemberListApiResponseDto["data"]>([]);
  const [memberList, setMemberList] = useState<TeamMemberApiResponseDto["data"]>([]);

  const handleAcceptMember = async (teamMemberId: number) => {
    try {
      await acceptMember(teamMemberId);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRejectMember = async (teamMemberId: number) => {
    try {
      await rejectMember(teamMemberId);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteMember = async (teamMemberId: number) => {
    try {
      await deleteTeamMember(teamMemberId);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getDetailInfo = async () => {
      const response = await getStudyManagement(postId);
      try {
        if (response && response.data) {
          setDetailInfo(response.data);
        } else {
          window.alert(response.errorMessage);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getDetailInfo();
  }, [postId]);

  useEffect(() => {
    const getAppliedMember = async () => {
      const response = await getAppliedMemberList(postId, {
        order: "DESC",
        page: 1,
        take: 100,
      });
      try {
        if (response && response.data) {
          setAppliedMemberList(response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getAppliedMember();
  }, [postId]);

  useEffect(() => {
    const getMember = async () => {
      const response = await getTeamMember(postId, {
        order: "DESC",
        page: 1,
        take: 5,
      });
      try {
        if (response && response.data) {
          setMemberList(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMember();
  }, [postId]);

  return (
    <S.Container>
      <S.Box>
        {detailInfo && <S.DetailSection detailInfo={detailInfo} />}
        <S.ListSection>
          <AppliedList
            detailInfo={appliedMemberList}
            handleAcceptMember={(teamMemberId) => handleAcceptMember(teamMemberId)}
            handleRejectMember={(teamMemberId) => handleRejectMember(teamMemberId)}
          />
          <MemberList detailInfo={memberList} handleOutMember={(teamMemberId) => handleDeleteMember(teamMemberId)} />
        </S.ListSection>
        {detailInfo && <S.ButtonSection buttonType={detailInfo.status} isLeader={detailInfo.isLeader} />}
      </S.Box>
    </S.Container>
  );
}
