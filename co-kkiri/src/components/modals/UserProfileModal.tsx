import DefaultModalLayout from "./ModalLayout";
import UserProfileCardLayout from "../commons/UserProfileCard/UserProfileCardLayout";
import styled from "styled-components";
import { useUserInfoStore } from "@/stores/userInfoStore";
import Button from "../commons/Button";
import DESIGN_TOKEN from "@/styles/tokens";
import Divider from "../commons/Divider";
import DefaultCollapseSection from "../commons/CollapseSection";
import useOpenToggle from "@/hooks/useOpenToggle";
import EvaluationChip from "../commons/Chips/EvaluationChip";
import { isEmptyValue } from "@/utils/validationUtils";

interface UserProfileModalProps {
  userId: number;
}

export default function UserProfileModal({ userId }: UserProfileModalProps) {
  const { memberProfile } = getUserFromMock(userId);
  const { userId: myId } = useUserInfoStore();
  const { isOpen, setIsOpen } = useOpenToggle();
  return (
    <ModalLayout desktopWidth={430} tabletWidth={430} mobileWidth={320} onClose={() => {}}>
      <UserProfileCardLayout {...memberProfile} />
      <Box>
        <Introduce>
          {isEmptyValue(memberProfile.introduce) ? emptyMessages.introduce : memberProfile.introduce}
        </Introduce>
        <Link href={memberProfile.link || ""} target="_blank" rel="noopener noreferrer">
          <p>{isEmptyValue(memberProfile.link) ? emptyMessages.link : memberProfile.link}</p>
        </Link>
      </Box>
      <Divider />
      <CollapseSection title="유저가 받은 태그" isCollapsed={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {isEmptyValue(memberProfile.tags) ? (
          <EmptyCollapseBody>{emptyMessages.tags}</EmptyCollapseBody>
        ) : (
          <CollapseBody>
            {/*//TODO: 나중에 EvaluationChip mapping한건 밖으로 빼내야합니다, 몇군데에서 써서요.*/}
            {Object.entries(memberProfile.tags).map(([tag, count]) => (
              <EvaluationChip key={tag} label={`${tag} ${count}`} evaluationWay="compliments" />
            ))}
          </CollapseBody>
        )}
      </CollapseSection>
      {myId !== userId && <Button variant="primary">스카우트</Button>}
    </ModalLayout>
  );
}

const emptyMessages = {
  link: "링크 없음",
  introduce: "한줄소개를 아직 작성하지 않았어요!",
  tags: "아직 받은 태그가 없어요.",
};

const { color, typography } = DESIGN_TOKEN;

const ModalLayout = styled(DefaultModalLayout)`
  padding: 4rem 3rem 3rem;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
`;

const CollapseSection = styled(DefaultCollapseSection)`
  margin-bottom: 2rem;
`;

const CollapseBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem;
`;
const EmptyCollapseBody = styled.div`
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${color.gray[1]};
  ${typography.font12Regular}
`;
const Introduce = styled.p`
  color: ${color.black[1]};

  ${typography.font14Medium}
  text-align: center;
`;

const Link = styled.a`
  color: ${color.black[3]};
  ${typography.font12Medium}
`;

//TEST용 함수입니다. 추후 삭제해야 합니다.
function getUserFromMock(userId: number) {
  /*//TODO: 추후 DTO 맞춰야 함 MemberProfileApiResponseDto**/
  // return {
  //   memberProfile: {
  //     memberId: 1,
  //     nickname: "김개발",
  //     profileImgUrl:
  //       "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb7cXYS%2FbtsF2PRjBBM%2FFm7rMvVakPKHChQKjiMqP1%2Fimg.png",
  //     career: 3,
  //     position: "프론트엔드",
  //     stacks: ["React", "TypeScript"],
  //     score: 40,
  //     link: "http://dev.co-kkiri.com",
  //     introduce: "안녕하세요. 프론트엔드 개발자 코끼리입니다. 잘 부탁드립니다.",
  //     // {<Tag명>:<이Tag를 받은 개수>, <Tag명>:<이Tag를 받은 개수>, …}
  //     tags: {
  //       // "시간 약속을 잘 지켜요 ⏰": 10,
  //       // "문서정리를 잘해주세요 📑": 5,
  //       // "코드리뷰를 잘해요 📝": 3,
  //       // "팀원들과 소통을 잘해요 🗣": 2,
  //       // "많은 정보 공유 감사합니다 🔗": 1,
  //       // "리더십이 좋아요 😎": 1,
  //       // "분위기 메이커 💃🕺": 1,
  //       // "GPT인 줄 알았어요! 🤖": 1,
  //     },
  //   },
  // };

  return {
    memberProfile: {
      memberId: 1,
      nickname: "김개발",
      career: null,
      position: null,
      stacks: [],
      score: 40,
      link: null,
      introduce: null,
      tags: {},
    },
  };
}
