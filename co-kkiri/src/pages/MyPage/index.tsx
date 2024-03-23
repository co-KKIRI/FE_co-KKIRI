import * as S from "./styled";
import UserInfo from "@/components/domains/myPage/UserInfo";
import TagList from "@/components/domains/myPage/TagList";
import InvitedTeamList from "@/components/domains/myPage/InvitedTeamList";
import ScrapList from "@/components/domains/myPage/ScrapList";
import { invitedTeamList } from "@/lib/mock/myPage/invitedTeam";
import { myScrapList } from "@/lib/mock/myPage/myScrap";
import { userProfileInfoData } from "@/lib/mock/myPage/userProfileInfo";

export default function MyPage() {
  const profileInfo = userProfileInfoData.result.userProfileInfo;
  const teamList = invitedTeamList.result.inviteList;
  const scrapList = myScrapList.result.scrapList;

  return (
    <S.Container>
      <S.Box>
        <S.Wrapper>
          <UserInfo user={profileInfo} />
          <S.Lists>
            <TagList />
            <InvitedTeamList count={teamList.length} teamList={teamList} />
          </S.Lists>
        </S.Wrapper>
        <ScrapList scrapList={scrapList} />
      </S.Box>
    </S.Container>
  );
}
