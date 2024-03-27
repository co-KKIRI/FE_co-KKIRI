import { MemberProfileApiResponseDto } from "@/lib/api/member/type";
import { scoutList, scoutMember } from "@/lib/mock/scout/scoutList";
import DESIGN_TOKEN from "@/styles/tokens";
import { useQueries } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { InviteMemberRequestDto, ScoutListApiResponseDto } from "../../../lib/api/post/type";
import RHFDropdown, { Option } from "../../commons/Form/RHFDropdown";
import DefaultModalLayout from "../ModalLayout";
import { CombinedResults } from "./types";
import { mapSubmitData } from "./utils";
import Button from "@/components/commons/Button";
import FormElement from "@/components/commons/Form/FormElement";
import RHFTextArea from "@/components/commons/Form/RHFTextArea";
import ScoutUserProfile from "./ScoutUserProfile";

interface ScoutModalProps {
  memberId: number;
}

export default function ScoutModal({ memberId }: ScoutModalProps) {
  const values = useQueries<(ScoutListApiResponseDto | MemberProfileApiResponseDto)[], CombinedResults>({
    queries: [
      {
        //TODO: 스카우트를 위한 현재 초대 가능한 스터디/프로젝트 목록 가져오기
        queryKey: ["post", "scout"],
        initialData: scoutList,
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ["member", memberId],
        initialData: scoutMember,
        refetchOnWindowFocus: false,
      },
    ],
    combine: (results) => {
      const rawOptions = results[0].data as ScoutListApiResponseDto;
      const options = rawOptions.data.map<Option>((option) => ({ value: option.postId, label: option.title }));
      const { memberProfile } = results[1].data as MemberProfileApiResponseDto;
      return { options: options, userInfo: memberProfile };
    },
  });

  const { control, handleSubmit } = useForm<InviteMemberRequestDto>({
    defaultValues: {
      postId: undefined,
      memberId: memberId,
      message: "",
    },
    mode: "onSubmit",
  });

  const onSubmitHandler = () => {
    handleSubmit((data) => {
      const mappedData = mapSubmitData(values, data);
      console.log(mappedData);
      //TODO: mutate
    });
  };

  return (
    <ModalLayout desktopWidth={430} mobileWidth={320} onClose={() => {}}>
      <Title>유저 초대하기</Title>
      <FormBox onSubmit={onSubmitHandler}>
        <FormElement label="초대할 유저" FormFieldComponent={<ScoutUserProfile {...values.userInfo} />} />
        <FormElement
          label="스터디/프로젝트 선택"
          FormFieldComponent={
            <RHFDropdown
              formFieldName="postId"
              placeholder="스터디/프로젝트 선택"
              //TODO: 실 데이터 가져와야함
              options={values.options}
              control={control}
              errorMessage="스터디/프로젝트를 선택해주세요"
              isEssential
            />
          }
          isEssential
        />
        <FormElement
          label="초대 메시지"
          FormFieldComponent={
            <RHFTextArea formFieldName="message" placeholder="초대 메시지를 입력해주세요" control={control} />
          }
        />
        <Button type="submit" variant="primary">
          초대하기
        </Button>
      </FormBox>
    </ModalLayout>
  );
}

const { color, typography } = DESIGN_TOKEN;

const ModalLayout = styled(DefaultModalLayout)`
  padding: 4rem 3rem 3rem;

  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const Title = styled.h1`
  color: ${color.black[1]};
  ${typography.font20Bold}
`;
const FormBox = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
