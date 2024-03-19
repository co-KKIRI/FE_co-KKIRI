import DESIGN_TOKEN from "@/styles/tokens";
import { ReactNode } from "react";
import styled from "styled-components";

interface RadioButtonProps {
  children?: ReactNode;
  value: string;
  defaultChecked?: boolean;
}

export default function RadioButton({ children, value, defaultChecked }: RadioButtonProps) {
  return (
    <Label>
      {children}
      <RadioInput type="radio" name="invite" value={value} defaultChecked={defaultChecked} />
    </Label>
  );
}

const { color } = DESIGN_TOKEN;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
`; // 폰트는 디자인 추가되면 더 수정해야 할 듯

const RadioInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 4.3rem;
  border: 0.1rem solid ${color.gray[2]};
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: ${color.secondary};
    border: 0.3rem solid white;
    box-shadow: 0 0 0 0.1rem ${color.secondary};
  }
`;

// 아래 예시처럼 사용하면 됩니다.

// import RadioButton from "@/components/commons/RadioButton";

// //mock 데이터
// import { recruitedStudyList } from "@/lib/mock/recruiteStudyList";

// export default function StudyList() {
//   const [firstItem, ...otherItems] = recruitedStudyList.result.recruitedStudyList;

//   return (
//     <div>
//       <RadioButton value={firstItem.title} defaultChecked>
//         {firstItem.title}
//       </RadioButton>
//       {otherItems.map(({ postId, title }) => (
//         <RadioButton key={postId} value={title}>
//           {title}
//         </RadioButton>
//       ))}
//     </div>
//   );
// }
