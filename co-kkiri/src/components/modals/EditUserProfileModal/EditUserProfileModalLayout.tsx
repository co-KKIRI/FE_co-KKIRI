import styled from "styled-components";
import DefaultModalTextFieldInput from "../ModalTextFieldInput";
import DefaultModalTextFieldDropdown from "./ModalTextFieldDropdown";
import { useForm } from "react-hook-form";
import Button from "@/components/commons/Button";
import DESIGN_TOKEN from "@/styles/tokens";
import DefaultUserImage from "./UserImage";
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

  /**TODO: 이미지가 먼저, url 받아오고 나머지랑 같이 보내야함 */
  const onSubmitHandler = (data: UserProfile) => {
    useStore.setState({ userInfo: data });
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <EditableUserImage
        profileImgUrl={userInfo.profileImageUrl}
        onSelect={(file) => {
          const ProfileImgUrl = URL.createObjectURL(file as File);
          /**TODO: 실질적인 파일은 다른 곳에서 저장하고 있어야 함
           * 그리고 Submit할 때만 이미지 데이터 요청을 보내야함
           * 아직은 이미지 api를 보내는 책임 소재가 불분명함
           */
          useStore.setState({ userInfo: { ...userInfo, profileImageUrl: ProfileImgUrl } });
        }}
        isEditable
        $gridArea="user-image"
      />
      <ModalTextFieldInput name="nickname" control={control} $gridArea="nickname" />
      <ModalTextFieldDropdown name="position" control={control} $gridArea="position" />
      <ModalTextFieldDropdown name="career" control={control} $gridArea="career" />
      <ModalTextFieldInput name="link" control={control} $gridArea="link" />
      <ModalTextFieldDropdown name="stack" control={control} $gridArea="stack" />
      <ModalTextFieldInput name="introduce" control={control} $gridArea="introduce" />
      <SubmitButton variant="primary" $gridArea="button">
        수정하기
      </SubmitButton>
    </Form>
  );
}

const { mediaQueries } = DESIGN_TOKEN;

const Form = styled.form`
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

const EditableUserImage = styled(DefaultUserImage)<{ $gridArea: string }>`
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
