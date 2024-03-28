import Button from "@/components/commons/Button";
import { BUTTON_TYPE } from "@/constants/manageButtons";
import useManageButtons from "@/hooks/useManageButtons";
import DESIGN_TOKEN from "@/styles/tokens";
import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";

interface ButtonsProps {
  buttonType: "READY" | "PROGRESS" | "PROGRESS_END" | "DONE";
  isLeader: boolean;
  isReviewModalOpen: boolean;
  setIsReviewModalOpen: Dispatch<SetStateAction<boolean>>;
  postId: number;
}

export default function Buttons({
  buttonType,
  isLeader,
  postId,
  isReviewModalOpen,
  setIsReviewModalOpen,
}: ButtonsProps) {
  const numOfButtons = BUTTON_TYPE.filter(
    (buttonInfo) => buttonInfo.type === buttonType && buttonInfo.isLeader === isLeader,
  ).length;
  const { goToScoutPage, goToPostReviewPage, studyStartMutation, studyEndMutation } = useManageButtons();

  const handleStudyStart = (postId: number) => {
    studyStartMutation.mutate(postId);
  };

  const handleStudyEnd = (postId: number) => {
    studyEndMutation.mutate(postId);
  };

  const handleReviewModalOpen = () => {
    setIsReviewModalOpen(!isReviewModalOpen);
  };

  const getOnClickHandler = (label: string) => {
    switch (label) {
      case "초대하기":
        return goToScoutPage();
      case "스터디 시작":
        return handleStudyStart(postId);
      case "스터디 완료":
        return handleStudyEnd(postId);
      case "리뷰 작성":
        return goToPostReviewPage(postId);
      case "리뷰 보기":
        return handleReviewModalOpen();
      default:
        return () => {};
    }
  };

  return (
    <Box>
      {BUTTON_TYPE.map(
        (buttonInfo) =>
          buttonInfo.type === buttonType &&
          buttonInfo.isLeader === isLeader && (
            <ButtonWrapper key={buttonInfo.label} $numOfButtons={numOfButtons}>
              <Button
                variant={buttonInfo.variant}
                disabled={buttonInfo.disabled}
                onClick={() => getOnClickHandler(buttonInfo.label)}>
                {buttonInfo.label}
              </Button>
            </ButtonWrapper>
          ),
      )}
    </Box>
  );
}

const { mediaQueries } = DESIGN_TOKEN;

const Box = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
`;

const ButtonWrapper = styled.div<{ $numOfButtons: number }>`
  width: ${({ $numOfButtons }) => ($numOfButtons === 1 ? "50rem" : "24.4rem")};

  ${mediaQueries.tablet} {
    width: ${({ $numOfButtons }) => ($numOfButtons === 1 ? "32rem" : "15.6rem")};
  }

  ${mediaQueries.mobile} {
    width: ${({ $numOfButtons }) => ($numOfButtons === 1 ? "32rem" : "15.6rem")};
  }
`;
