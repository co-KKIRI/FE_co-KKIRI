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
import { useQuery } from "@tanstack/react-query";

interface UserProfileModalProps {
  userId: number;
}

export default function UserProfileModal({ userId }: UserProfileModalProps) {
  const { data: memberProfile } = useQuery({
    queryKey: ["memberProfile", userId],
    initialData: {
      memberId: 1,
      profileImageUrl: "",
      nickname: "김개발",
      career: NaN,
      position: "",
      stack: [],
      score: 40,
      link: "",
      introduce: "",
      tags: {},
    },
  });
  const { userId: myId } = useUserInfoStore();
  const { isOpen, setIsOpen } = useOpenToggle();
  return (
    <ModalLayout desktopWidth={430} tabletWidth={430} mobileWidth={320} onClose={() => {}}>
      <UserProfileCardLayout {...memberProfile} />
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
