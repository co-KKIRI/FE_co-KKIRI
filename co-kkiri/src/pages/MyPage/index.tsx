import * as S from "./styled";
import InvitedTeamList from "@/components/domains/myPage/InvitedTeamList";
import TagList from "@/components/domains/myPage/TagList";
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
          <S.UserInfoSection user={profileInfo} />
          <S.Lists>
            <TagList />
            <InvitedTeamList count={teamList.length} teamList={teamList} />
          </S.Lists>
        </S.Wrapper>
        <S.ScrapListSection scrapList={scrapList} />
      </S.Box>
    </S.Container>
  );
}
