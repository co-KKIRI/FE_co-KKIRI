import styled from "styled-components";
import { useForm } from "react-hook-form";
import Button from "@/components/commons/Button";
import DESIGN_TOKEN from "@/styles/tokens";
import DefaultUserImage from "./UserImage";
import { UserProfile } from "@/types/userTypes";
import { useUserInfoStore } from "@/stores/userInfoStore";
import DefulatFormElement from "@/components/commons/Form/FormElement";
import RHFDropdown from "@/components/commons/Form/RHFDropdown";
import ModalTextFieldInput from "../ModalTextFieldInput";
import { DROPDOWN_FORM_INFO } from "../../../constants/dropDown";
import RHFStackPopover from "@/components/commons/Form/RHFStackPopover";

interface EditUserProfileModalLayoutProps {
  onSubmit: (data: UserProfile) => void;
}

export default function EditUserProfileModalLayout({ onSubmit }: EditUserProfileModalLayoutProps) {
  const {
    user: { position, career },
  } = DROPDOWN_FORM_INFO;

  const userInfo = useUserInfoStore((state) => state.userInfo ?? state.defaultUserInfo);

  const { control, handleSubmit } = useForm<UserProfile>({
    defaultValues: userInfo,
    mode: "onBlur",
  });

  /**TODO: 이미지가 먼저, url 받아오고 나머지랑 같이 보내야함 */
  const onSubmitHandler = (data: UserProfile) => {
    useUserInfoStore.setState({ userInfo: data });
    onSubmit(data);
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <EditableUserImage
        profileImgUrl={userInfo?.profileImageUrl}
        onSelect={(file) => {
          const ProfileImgUrl = URL.createObjectURL(file as File);
          /**TODO: 실질적인 파일은 다른 곳에서 저장하고 있어야 함
           * 그리고 Submit할 때만 이미지 데이터 요청을 보내야함
           * 아직은 이미지 api를 보내는 책임 소재가 불분명함
           */
          useUserInfoStore.setState({ userInfo: { ...userInfo, profileImageUrl: ProfileImgUrl } });
        }}
        isEditable
        $gridArea="user-image"
      />
      <FormElement
        $gridArea="nickname"
        label={"닉네임"}
        FormFieldComponent={<ModalTextFieldInput name="nickname" control={control} />}
      />

      <FormElement
        $gridArea="position"
        label={"포지션"}
        FormFieldComponent={
          <RHFDropdown placeholder="포지션" options={position} formFieldName="position" control={control} />
        }
      />

      <FormElement
        $gridArea="career"
        label={"경력"}
        FormFieldComponent={
          <RHFDropdown placeholder="경력" options={career} formFieldName="career" control={control} />
        }
      />

      <FormElement
        $gridArea="link"
        label={"대표 링크"}
        FormFieldComponent={<ModalTextFieldInput name="link" control={control} />}
      />

      <FormElement
        $gridArea="stacks"
        label={"관심 스택"}
        FormFieldComponent={<RHFStackPopover formFieldName="stacks" control={control} />}
      />

      <FormElement
        $gridArea="introduce"
        label={"한줄 소개"}
        FormFieldComponent={<ModalTextFieldInput name="introduce" control={control} />}
      />

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

const FormElement = styled(DefulatFormElement)<{ $gridArea: string }>`
  grid-area: ${({ $gridArea }) => $gridArea};
`;

const SubmitButton = styled(Button)<{ $gridArea: string }>`
  grid-area: ${({ $gridArea }) => $gridArea};
`;
