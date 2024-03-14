import styled, { css } from "styled-components";
import { ICONS } from "@/constants/icons";
import DESIGN_TOKEN from "@/styles/tokens";

interface DropdownButtonProps {
  selectOption: string;
  onClick: () => void;
  selectType?: string;
}

export default function DefaultDropdownButton({ selectOption, onClick, selectType }: DropdownButtonProps) {
  return (
    <Container onClick={onClick} selectType={selectType}>
      <div>{selectOption}</div>
      <img src={selectType === "sort" ? ICONS.triangle.src : ICONS.popover.src} />
    </Container>
  );
}

const { color, typography } = DESIGN_TOKEN;

const Container = styled.button<{ selectType?: string }>`
  ${({ selectType }) => (selectType === "sort" ? VARIANT_STYLE.sort : VARIANT_STYLE.drop)}
`;

const VARIANT_STYLE = {
  sort: css`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: ${color.black[3]};
    ${typography.font14Semibold}
  `,

  drop: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    gap: 0.4rem;
    border-radius: 0.5rem;
    height: 4.8rem;
    ${typography.font16Semibold}
    color: ${color.black[3]};
    border: 0.1rem solid ${color.gray[2]};
    width: 100%;

    & img {
      width: 1.8rem;
    }
  `,
};
