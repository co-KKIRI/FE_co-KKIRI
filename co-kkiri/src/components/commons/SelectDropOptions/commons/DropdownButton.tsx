import styled, { css } from "styled-components";
import { ICONS } from "@/constants/icons";
import DESIGN_TOKEN from "@/styles/tokens";

interface DropdownButtonProps {
  selectOption: string;
  onClick: () => void;
  $selectType?: string;
  $isSelected: boolean;
}

interface ContainerProps {
  $selectType?: string;
  $isSelected?: boolean;
}

/**
 *  * DefaultDropdownMenu 컴포넌트
 * @param $selectOption: 버튼 안의 초기 innerText 결정
 * @property {"sort"|"date"} $selectOption
 * $selectOption의 기본값은 drop 입니다.
 *
 * @param $selectType: 버튼 안의 초기 icon 결정
 */
export default function DropdownButton({ selectOption, onClick, $selectType, $isSelected }: DropdownButtonProps) {
  return (
    <Container onClick={onClick} $selectType={$selectType} $isSelected={$isSelected}>
      <div>{selectOption}</div>
      <img
        src={
          $selectType === "sort" ? ICONS.triangle.src : $selectType === "date" ? ICONS.calendar.src : ICONS.popover.src
        }
        alt={
          $selectType === "sort" ? ICONS.triangle.alt : $selectType === "date" ? ICONS.calendar.alt : ICONS.popover.alt
        }
      />
    </Container>
  );
}

const { color, typography } = DESIGN_TOKEN;

const Container = styled.button<ContainerProps>`
  ${({ $selectType }) => ($selectType === "sort" ? VARIANT_STYLE.sort : VARIANT_STYLE.drop)}
`;

const VARIANT_STYLE = {
  sort: css`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: ${color.black[3]};
    ${typography.font14Semibold}
  `,

  drop: css<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 2rem;
    gap: 0.4rem;
    border-radius: 0.5rem;
    height: 4.8rem;
    ${typography.font16Medium}
    color : ${({ $isSelected }) => ($isSelected ? color.black[1] : color.black[3])};
    border: 0.1rem solid ${color.gray[2]};

    & img {
      width: 1.8rem;
    }
  `,
};
