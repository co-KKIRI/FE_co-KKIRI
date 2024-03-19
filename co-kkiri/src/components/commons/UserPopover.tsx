import { Link } from "react-router-dom";
import { DROPDOWN_INFO } from "@/constants/dropDown";
import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

interface UserPopoverProps {
  isOpen: boolean;
  handleSelectOption: (options: string) => void;
}

export default function UserPopover({ isOpen, handleSelectOption }: UserPopoverProps) {
  const { popover } = DROPDOWN_INFO;

  return (
    <Container $isOpen={isOpen}>
      <Box>
        {popover.map((options) => (
          <Link to={options.path}>
            <Option
              onClick={() => {
                handleSelectOption(options.option);
              }}
              key={options.option}>
              {options.option}
            </Option>
          </Link>
        ))}
      </Box>
    </Container>
  );
}

const { typography, mediaQueries, color, boxShadow, zIndex } = DESIGN_TOKEN;

const Container = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
  ${zIndex.popover}

  ${mediaQueries.desktop} {
    right: 4rem;
  }

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
