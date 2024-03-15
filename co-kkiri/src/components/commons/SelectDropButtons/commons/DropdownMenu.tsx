import styled, { css } from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

interface DropdownMenuProps {
  $selectType:
    | "position"
    | "meeting"
    | "sortList"
    | "memberCount"
    | "deadline"
    | "progressPeriod"
    | "contactMethod"
    | "career";
  handleSelectOption: (option: string) => void;
  isOpen: boolean;
  $borderType: "round" | "square";
}

interface ContainerProps {
  $isOpen: boolean;
  $borderType?: "round" | "square";
}

interface OptionList {
  position?: string[];
  meeting?: string[];
  sortList?: string[];
  memberCount?: string[];
  deadline?: string[];
  progressPeriod?: string[];
  contactMethod?: string[];
  career?: string[];
}

/**
 *  * DefaultDropdownMenu 컴포넌트
 * @param $borderType: 드랍메뉴의 형태 결정
 * @property {"round"|"square"} $borderType
 *
 * @param $selectType: 옵션의 내용 결정
 */

export default function DropdownMenu({ $selectType, isOpen, handleSelectOption, $borderType }: DropdownMenuProps) {
  const optionList: { round: OptionList; square: OptionList } = {
    round: {
      position: ["전체", "프론트엔드", "백엔드", "디자이너", "IOS", "안드로이드", "데브옵스"],
      meeting: ["전체", "온라인", "오프라인", "온/오프라인"],
      sortList: ["최신순", "마감순", "조회순"],
    },
    square: {
      position: ["프론트엔드", "풀스택", "백엔드", "디자이너", "IOS", "안드로이드", "데브옵스"],
      meeting: ["전체", "온라인", "오프라인", "온/오프라인"],
      memberCount: ["인원 미정~10명 이상", "1명", "2명", "3명", "4명", "5명", "6명", "7명", "8명", "9명", "10명"],
      deadline: [],
      progressPeriod: ["1주", "2주", "3주", "1개월", "2개월", "3개월", "4개월", "5개월", "6개월", "6개월 이상"],
      career: ["신입", "1년차", "2년차", "3년차", "4년차", "5년차", "5년차 이상"],
    },
  };

  return (
    <Container $isOpen={isOpen} $borderType={$borderType}>
      {optionList[$borderType][$selectType]?.map((option: string) => (
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

const COMMON_STYLE = css`
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  border: 0.1rem solid ${color.gray[2]};
  color: ${color.black[3]};
  background-color: ${color.white};
  ${zIndex.popover}
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
