import styled from "styled-components";
import DefaultInfoField from "./InfoField";
import MultiselectDropdown from "@/components/commons/DropDowns/StackMultiselectDropdown";
import ModalTextFieldInput from "../ModalTextFieldInput";
import { useForm } from "react-hook-form";
import UserInfoDropdown from "@/components/commons/DropDowns/UserInfoDropdown";
import Button from "@/components/commons/Button";

export default function EditUserProfileModalLayout() {
  const { control } = useForm();

  return (
    <Container>
      <InfoField
        label="닉네임"
        fleid={<ModalTextFieldInput name="nickname" control={control} />}
        isRequired
        $gridArea="nickname"
      />
      <InfoField label="포지션" fleid={<UserInfoDropdown menuInfoType="position" />} $gridArea="position" />
      <InfoField label="경력" fleid={<UserInfoDropdown menuInfoType="career" />} $gridArea="career" />
      <InfoField label="대표 링크" fleid={<ModalTextFieldInput name="link" control={control} />} $gridArea="link" />
      <InfoField
        label={"관심 스택"}
        fleid={<MultiselectDropdown selectedOptions={["JavaScript"]} onSelectChange={() => {}} />}
        isRequired
        $gridArea="stack"
      />
      <InfoField
        label={"한줄 소개"}
        fleid={<ModalTextFieldInput name="introduce" control={control} />}
        $gridArea="introduce"
      />
      <Button variant="primary">지원하기</Button>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  display: grid;
  gap: 1.8rem 2rem;

  grid-template-areas: "nickname position" "link career" "stack stack" "introduce introduce";
  grid-template-columns: 1fr 1fr;
`;

const InfoField = styled(DefaultInfoField)<{ $gridArea: string }>`
  grid-area: ${({ $gridArea }) => $gridArea};
`;
