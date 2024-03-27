import styled from "styled-components";
import DefaultModalLayout from "../ModalLayout";
import DESIGN_TOKEN from "@/styles/tokens";
import Button from "../../commons/Button";
import FormElement from "../../commons/Form/FormElement";
import RHFDropdown, { Option } from "../../commons/Form/RHFDropdown";
import { InviteMemberRequestDto, ScoutListApiResponseDto, ScoutPost } from "../../../lib/api/post/type";
import { useForm } from "react-hook-form";
import RHFTextArea from "../../commons/Form/RHFTextArea";
import { useQueries } from "@tanstack/react-query";
import { MemberProfileApiResponseDto } from "@/lib/api/member/type";
import { MemberProfile } from "../../../lib/api/member/type";
import ScoutUserProfile from "./ScoutUserProfile";

interface ScoutModalProps {
  memberId: number;
}

type CombinedResults = {
  options: Option<number>[];
  userInfo: Pick<MemberProfile, "nickname" | "profileImageUrl" | "position">;
};

export default function ScoutModal({ memberId }: ScoutModalProps) {
  const results = useQueries<(ScoutListApiResponseDto | MemberProfileApiResponseDto)[], CombinedResults>({
    queries: [
      {
        //TODO: 스카우트를 위한 현재 초대 가능한 스터디/프로젝트 목록 가져오기
        queryKey: ["post", "scout"],
        initialData: {
          data: [
            { postId: 1, title: "으쌰으쌰파티파티" },
            { postId: 3, title: "React 뿌수기 하실분" },
            { postId: 4, title: "프로젝트 파트너 찾아요" },
            { postId: 5, title: "프론트엔드 개발자 모집" },
            { postId: 6, title: "백엔드 개발자 모집" },
            { postId: 7, title: "백엔드 개발자 모집" },
            { postId: 8, title: "디자이너 모집" },
            { postId: 9, title: "기획자 모집" },
            { postId: 10, title: "테스터 모집" },
          ],
        },
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ["member", memberId],
        initialData: {
          memberProfile: {
            nickname: "테스트유저",
            profileImageUrl: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
            position: "프론트엔드",
          },
        },
        refetchOnWindowFocus: false,
      },
    ],
    combine: (results) => {
      const rawOptions = results[0].data as ScoutListApiResponseDto;
      const options = rawOptions.data.map<Option<number>>((option) => ({ value: option.postId, label: option.title }));
      const {
        memberProfile: { nickname, profileImageUrl, position },
      } = results[1].data as MemberProfileApiResponseDto;
      return { options: options, userInfo: { nickname, profileImageUrl, position } };
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

  return (
    <ModalLayout desktopWidth={430} mobileWidth={320} onClose={() => {}}>
      <Title>유저 초대하기</Title>
      <FormBox
        onSubmit={handleSubmit(
          (data) => console.log(data),
          // 데이터 매핑처리

          // mutate
        )}>
        <FormElement
          label="초대할 유저"
          InputComponent={
            <ScoutUserProfile
              nickname={results.userInfo.nickname}
              profileImageUrl={results.userInfo.profileImageUrl}
              position={results.userInfo.position}
            />
          }
        />
        <FormElement
          label="스터디/프로젝트 선택"
          InputComponent={
            <RHFDropdown
              formFieldName="postId"
              placeholder="스터디/프로젝트 선택"
              //TODO: 실 데이터 가져와야함
              options={results.options}
              control={control}
              errorMessage="스터디/프로젝트를 선택해주세요"
              isEssential
            />
          }
          isEssential
        />
        <FormElement
          label="초대 메시지"
          InputComponent={
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
