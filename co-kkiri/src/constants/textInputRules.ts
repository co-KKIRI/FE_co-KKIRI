interface ValidationRule {
  required?: string;
  maxLength?: { value: number; message: string };
  pattern?: { value: RegExp; message: string };
}

export const CONDITIONS: Record<string, ValidationRule> = {
  nickname: {
    required: "닉네임을 입력해 주세요",
    maxLength: { value: 10, message: "최대 10글자까지 쓸 수 있어요" },
  },
  link: {
    pattern: {
      value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/, // 해당 정규식은 임시입니다.
      message: "올바른 url 형식이 아닙니다.",
    },
  },
  introduction: {
    maxLength: { value: 30, message: "최대 30글자까지 쓸 수 있어요" },
  },
};

export const LABEL = { nickname: "닉네임", link: "대표 링크", introduction: "한 줄 소개" };
