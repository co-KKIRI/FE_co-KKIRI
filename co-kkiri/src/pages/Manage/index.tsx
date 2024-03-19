import MemberList from "@/components/domains/manage/MemberList";
import * as S from "./styled";
import { manageData } from "@/lib/mock/manage/manage";
import AppliedList from "@/components/domains/manage/AppliedList";

interface ManageProps {
  id: number;
}

export default function Manage({ id = 0 }: ManageProps) {
  const detailInfo = manageData.result[id];

  return (
    <S.Container>
      <S.Box>
        <S.DetailSection detailInfo={detailInfo} />
        <S.ListSection>
          <AppliedList />
          <MemberList />
        </S.ListSection>
        <S.ButtonSection buttonType={detailInfo.status} isLeader={detailInfo.isLeader} />
      </S.Box>
    </S.Container>
  );
}
