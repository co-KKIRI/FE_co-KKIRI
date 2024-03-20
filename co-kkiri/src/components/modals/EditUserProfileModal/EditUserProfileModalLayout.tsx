import styled from "styled-components";
import InfoField from "./InfoField";
import MultiselectDropdown from "@/components/commons/DropDowns/StackMultiselectDropdown";
import ModalTextFieldInput from "../ModalTextFieldInput";
import { useForm } from "react-hook-form";
import UserInfoDropdown from "@/components/commons/DropDowns/UserInfoDropdown";
import { Info } from "lucide-react";
import Button from "@/components/commons/Button";

export default function EditUserProfileModalLayout() {
  const { control } = useForm();
  return (
    <Container>
      <InfoField label={"닉네임"} fleid={<ModalTextFieldInput name="nickname" control={control} />} isRequired />
      <InfoField label={"포지션"} fleid={<UserInfoDropdown menuInfoType="position" />} />
      <InfoField label="대표 링크" fleid={<ModalTextFieldInput name="link" control={control} />} />
      <InfoField label="경력" fleid={<UserInfoDropdown menuInfoType="career" />} />
      <InfoField
        label={"관심 스택"}
        fleid={<MultiselectDropdown selectedOptions={["JavaScript"]} onSelectChange={() => {}} />}
        isRequired
      />
      <InfoField label={"한줄 소개"} fleid={<ModalTextFieldInput name="introduce" control={control} />} />
      <Button variant="primary">지원하기</Button>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  display: grid;
`;
