import * as S from "./styled";
import UserInfo from "@/components/domains/myPage/UserInfo";
import TagList from "@/components/domains/myPage/TagList";
import InvitedTeamList from "@/components/domains/myPage/InvitedTeamList";
import ScrapList from "@/components/domains/myPage/ScrapList";
import { useQuery } from "@tanstack/react-query";
import { getInvitedTeamList, getScrapList, getUserInfo, getVisibleProfileStatus } from "@/lib/api/myPage";

export default function MyPage() {
  const { data: userInfo, error: userInfoError } = useQuery({
    queryKey: ["info"],
    queryFn: () => getUserInfo(),
    retry: false,
  });

  // 리뷰는 아직 API 명세 안나옴.

  const { data: invitedTeamList, error: invitedTeamListError } = useQuery({
    queryKey: ["invite/list"],
    queryFn: () => getInvitedTeamList({ order: "DESC", page: 1, take: 100 }),
    retry: false,
  });

  const { data: scrapList, error: scrapListError } = useQuery({
    queryKey: ["/my-page/scrap/list"],
    queryFn: () => getScrapList({ order: "DESC", page: 1, take: 100 }),
    retry: false,
  });

  const { data: visibleProfile, error: visibleProfileError } = useQuery({
    queryKey: ["my-page/visigle-profile"],
    queryFn: () => getVisibleProfileStatus(),
    retry: false,
  });

  if (userInfoError) {
    console.error(userInfoError);
  }

  if (invitedTeamListError) {
    console.error(invitedTeamListError);
  }

  if (scrapListError) {
    console.error(scrapListError);
  }

  if (visibleProfileError) {
    console.error(visibleProfileError);
  }

  return (
    <S.Container>
      <S.Box>
        <S.Wrapper>
          {userInfo && visibleProfile && <UserInfo user={userInfo} visibleProfile={visibleProfile} />}
          <S.Lists>
            <TagList />
            {invitedTeamList && <InvitedTeamList count={invitedTeamList.data.length} teamList={invitedTeamList.data} />}
          </S.Lists>
        </S.Wrapper>
        {scrapList && <ScrapList data={scrapList.data} />}
      </S.Box>
      {/* {userInfoError && <AuthModal onClose={handleModal} />} */}
    </S.Container>
  );
}
