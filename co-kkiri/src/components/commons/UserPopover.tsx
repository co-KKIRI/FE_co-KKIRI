import { Link } from "react-router-dom";
import { DROPDOWN_INFO } from "@/constants/dropDown";
import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

interface UserPopoverProps {
  isPopoverOpen: boolean;
  handleSelectOption: (options: string) => void;
}

export default function UserPopover({ isPopoverOpen, handleSelectOption }: UserPopoverProps) {
  const { popover } = DROPDOWN_INFO;

  return (
    <Container $isPopoverOpen={isPopoverOpen}>
      <Box>
        {popover.map((options) => (
          <Link to={options.path} key={options.option}>
            <Option
              onClick={() => {
                handleSelectOption(options.option);
              }}>
              {options.option}
            </Option>
          </Link>
        ))}
      </Box>
    </Container>
  );
}

const { typography, mediaQueries, color, boxShadow, zIndex } = DESIGN_TOKEN;

const Container = styled.div<{ $isPopoverOpen: boolean }>`
  ${zIndex.popover}
  display: ${({ $isPopoverOpen }) => ($isPopoverOpen ? "block" : "none")};
  opacity: ${({ $isPopoverOpen }) => ($isPopoverOpen ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
  position: absolute;
  right: 4rem;

  ${mediaQueries.tablet} {
    right: 3rem;
  }

  ${mediaQueries.mobile} {
    right: 2rem;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  width: 15.6rem;
  height: 13.9rem;
  border-radius: 0.5rem;
  background: ${color.white};
  box-shadow: ${boxShadow.content};
  padding: 2rem;
`;

const Option = styled.div`
  ${typography.font14Medium}
`;
