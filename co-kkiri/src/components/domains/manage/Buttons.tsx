import Button from "@/components/commons/Button";
import { BUTTON_TYPE } from "@/constants/manageButtons";
import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

interface ButtonsProps {
  buttonType: "READY" | "PROGRESS" | "PROGRESS_END" | "DONE";
  isLeader: boolean;
}

export default function Buttons({ buttonType, isLeader }: ButtonsProps) {
  const numOfButtons = BUTTON_TYPE.filter(
    (buttonInfo) => buttonInfo.type === buttonType && buttonInfo.isLeader === isLeader,
  ).length;

  return (
    <Box>
      {BUTTON_TYPE.map(
        (buttonInfo) =>
          buttonInfo.type === buttonType &&
          buttonInfo.isLeader === isLeader && (
            <ButtonWrapper key={buttonInfo.label} $numOfButtons={numOfButtons}>
              <Button variant={buttonInfo.variant} disabled={buttonInfo.disabled} onClick={buttonInfo.onClick}>
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
