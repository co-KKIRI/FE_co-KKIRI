import styled, { css } from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

interface DropdownMenuProps {
  options: string[];
  handleSelectOption: (option: string) => void;
  isOpen: boolean;
  $borderType: "round" | "square";
}

interface ContainerProps {
  $isOpen: boolean;
  $borderType: "round" | "square";
}

/**
 *  * DefaultDropdownMenu 컴포넌트
 * @param $borderType: 드랍메뉴 형태
 * @property {"round"|"square"} $borderType
 *
 * @param options: 드랍메뉴 내용
 */

export default function DropMenu({ options, isOpen, handleSelectOption, $borderType }: DropdownMenuProps) {
  return (
    <Container $isOpen={isOpen} $borderType={$borderType}>
      {options.map((option: string) => (
        <Option
          $borderType={$borderType}
          onClick={() => {
            handleSelectOption(option);
          }}
          key={option}>
          {option}
        </Option>
      ))}
    </Container>
  );
}

const { typography, color, zIndex } = DESIGN_TOKEN;

const Container = styled.div<ContainerProps>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  ${({ $borderType }) => ($borderType === "round" ? VARIANT_STYLE.round : VARIANT_STYLE.square)}
`;

const COMMON_STYLE = css<{ $borderType?: string }>`
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  border: 0.1rem solid ${color.gray[2]};
  color: ${color.black[3]};
  background-color: ${color.white};
  position: absolute;
  top: ${({ $borderType }) => ($borderType === "round" ? "4.2rem" : "5.4rem")};

  ${zIndex.dropdown}
`;

const VARIANT_STYLE = {
  round: css`
    width: 10.4rem;
    padding: 1.6rem 1.4rem;
    border-radius: 2rem;
    ${COMMON_STYLE}
  `,

  square: css`
    width: 100%;
    border-radius: 0.5rem;
    padding: 2rem;
    ${COMMON_STYLE}
  `,
};

const Option = styled.div<{ $borderType?: string }>`
  color: ${color.black[1]};
  cursor: pointer;
  ${({ $borderType }) => ($borderType === "round" ? typography.font12Semibold : typography.font16Medium)};
`;
