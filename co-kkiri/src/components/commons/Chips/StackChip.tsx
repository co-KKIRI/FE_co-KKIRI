import { MouseEvent } from "react";
import styled from "styled-components";
import DefaultChip from "./DefaultChip";
import DESIGN_TOKEN from "@/styles/tokens";

interface StackChipProps {
  label: string;
  imgUrl: string;
  isSelected?: boolean;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function StackChip({ label, imgUrl, isSelected, onClick }: StackChipProps) {
  return <Container label={label} imgUrl={imgUrl} isSelected={isSelected} onClick={onClick} isVertical />;
}

const { color, typography, mediaQueries } = DESIGN_TOKEN;
const Container = styled(DefaultChip)`
  width: 7.2rem;
  height: 7rem;

  padding: 0.8rem;
  gap: 0.4rem;

  background-color: ${color.white};
  border: 0.1rem solid ${color.gray[2]};
  border-radius: 1rem;
  color: ${color.black[1]};

  ${({ isSelected }) => !isSelected && `opacity: .4;`}
  &:hover {
    ${({ isSelected }) => !isSelected && `opacity: 1;`}
  }

  & > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }

  ${typography.font11Regular}

  ${mediaQueries.mobile} {
    width: fit-content;
    height: fit-content;

    padding: 0.3rem 1.2rem;

    border-radius: 9999rem;

    opacity: 1;

    & .image-container {
      display: none;
    }

    ${({ isSelected }) =>
      isSelected &&
      `
      background-color: ${color.white};
      color: ${color.secondary};

      border-color: ${color.secondary};
      `}

    &:hover {
      ${({ isSelected }) =>
        !isSelected &&
        `
        background-color: ${color.white};
        color: ${color.secondary};

        border-color: ${color.secondary};
    `}
    }
  }
`;
