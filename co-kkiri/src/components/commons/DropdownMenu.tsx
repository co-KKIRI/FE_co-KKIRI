import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

interface DropdownMenuProps {
  selectType: "position" | "meeting" | "sortList";
  setSelectOption: (option: string) => void;
  isOpen: boolean;
  toggleDropdown: () => void;
}

export default function DropdownMenu({ selectType, setSelectOption, isOpen, toggleDropdown }: DropdownMenuProps) {
  const optionList = {
    position: ["전체", "프론트엔드", "백엔드", "디자이너", "IOS", "안드로이드", "데브옵스"],
    meeting: ["전체", "온라인", "오프라인", "온/오프라인"],
    sortList: ["최신순", "마감순", "조회순"],
  };

  return (
    <Container isOpen={isOpen}>
      {optionList[selectType].map((option: string) => (
        <Option
          onClick={() => {
            setSelectOption(option);
            toggleDropdown();
          }}
          key={option}>
          {option}
        </Option>
      ))}
    </Container>
  );
}

const { typography, color } = DESIGN_TOKEN;

const Container = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  width: 10.4rem;
  padding: 1.6rem 0;
  padding-left: 1.4rem;
  border-radius: 2rem;
  border: 0.1rem solid ${color.gray[2]};
  gap: 1.6rem;
`;

const Option = styled.div`
  ${typography.font12Semibold}
  color: ${color.black[1]};
  cursor: pointer;
`;
