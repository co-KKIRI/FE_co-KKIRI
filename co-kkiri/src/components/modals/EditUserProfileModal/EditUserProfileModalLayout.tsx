import styled from "styled-components";
import DefaultModalTextFieldInput from "../ModalTextFieldInput";
import DefaultModalTextFieldDropdown from "./ModalTextFieldDropdown";
import { useForm } from "react-hook-form";
import Button from "@/components/commons/Button";
import DESIGN_TOKEN from "@/styles/tokens";
export interface FormData {
  nickname: string;
  position: string;
  career: string;
  link: string;
  stacks: string[];
  introduce: string;
}

export default function EditUserProfileModalLayout() {
  const { control, watch } = useForm<FormData>({
    defaultValues: {
      nickname: "",
      position: "",
      career: "",
      link: "",
      stacks: [],
      introduce: "",
    },
    mode: "onBlur",
  });

  return (
    <Container>
      <ModalTextFieldInput name="nickname" control={control} $gridArea="nickname" />
      <ModalTextFieldDropdown name="position" control={control} $gridArea="position" />
      <ModalTextFieldDropdown name="career" control={control} $gridArea="career" />
      <ModalTextFieldInput name="link" control={control} $gridArea="link" />
      <ModalTextFieldDropdown name="stacks" control={control} $gridArea="stack" />
      <ModalTextFieldInput name="introduce" control={control} $gridArea="introduce" />
      <SubmitButton
        variant="primary"
        onClick={() => {
          console.log(watch());
        }}
        $gridArea="button">
        수정하기
      </SubmitButton>
    </Container>
  );
}

const { mediaQueries } = DESIGN_TOKEN;

const Container = styled.section`
  width: 100%;
  display: grid;
  gap: 1.8rem 2rem;

  grid-template-areas: "nickname position" "link career" "stack stack" "introduce introduce" "button button";
  grid-template-columns: 1fr 1fr;

  ${mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    height: 80%;
  }
`;

const ModalTextFieldInput = styled(DefaultModalTextFieldInput)<{ $gridArea: string }>`
  grid-area: ${({ $gridArea }) => $gridArea};
`;

const ModalTextFieldDropdown = styled(DefaultModalTextFieldDropdown)<{ $gridArea: string }>`
  grid-area: ${({ $gridArea }) => $gridArea};
`;

const SubmitButton = styled(Button)<{ $gridArea: string }>`
  grid-area: ${({ $gridArea }) => $gridArea};
`;
