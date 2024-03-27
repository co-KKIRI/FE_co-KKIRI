import { InviteMemberRequestDto } from "@/lib/api/post/type";
import { CombinedResults } from "./types";

export const mapSubmitData = (queryData: CombinedResults, formData: InviteMemberRequestDto) => {
  const { postId, memberId, message } = formData;
  const responseData: InviteMemberRequestDto = {
    postId: postId,
    memberId: memberId,
    message: message,
  };

  // 데이터 매핑처리
  if (message.trim() === "") {
    responseData.message = `
            ${queryData.userInfo.nickname}님, 안녕하세요? 🖐️\n 제가 진행 중인 "${queryData.options.find((option) => option.value === postId)?.label}" 에서 함께 공부하고 성장할 동료분들을 모시고있습니다. \n관심 있으시면 편하게 연락주세요! 🥰 
            `.trim();
  }

  return responseData;
};
