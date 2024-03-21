import styled from "styled-components";
import DefaultModalTextFieldInput from "../ModalTextFieldInput";
import DefaultModalTextFieldDropdown from "./ModalTextFieldDropdown";
import { useForm } from "react-hook-form";
import Button from "@/components/commons/Button";
import DESIGN_TOKEN from "@/styles/tokens";
import DefaultEditUserImage from "./UserImage";
import { UserProfile } from "@/types/UserTypes";
import { useStore } from "@/stores/MyProfileStore";

interface EditUserProfileModalLayoutProps {
  onSubmit: (data: UserProfile) => void;
}

export default function EditUserProfileModalLayout({ onSubmit }: EditUserProfileModalLayoutProps) {
  const userInfo = useStore((state) => state.userInfo);
  const { control, handleSubmit } = useForm<UserProfile>({
    defaultValues: userInfo,
    mode: "onBlur",
  });

  return (
    <Container>
      <EditUserImage onSelect={() => {}} isEditable $gridArea="user-image" />
      <ModalTextFieldInput name="nickname" control={control} $gridArea="nickname" />
      <ModalTextFieldDropdown name="position" control={control} $gridArea="position" />
      <ModalTextFieldDropdown name="career" control={control} $gridArea="career" />
      <ModalTextFieldInput name="link" control={control} $gridArea="link" />
      <ModalTextFieldDropdown name="stack" control={control} $gridArea="stack" />
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

const Container = styled.form`
  width: 100%;
  display: grid;
  gap: 1.8rem 2rem;

  grid-template-areas: "user-image user-image" "nickname position" "link career" "stack stack" "introduce introduce" "button button";
  grid-template-columns: 1fr 1fr;

  ${mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    height: 62rem;
    overflow-y: overlay;
    overflow-x: hidden;
  }
`;

const EditUserImage = styled(DefaultEditUserImage)<{ $gridArea: string }>`
  grid-area: ${({ $gridArea }) => $gridArea};
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
