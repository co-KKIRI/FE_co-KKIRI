interface ValidationRule {
  required?: string;
  maxLength?: { value: number; message: string };
  pattern?: { value: RegExp; message: string };
}

export const RULES: Record<string, ValidationRule> = {
  nickname: {
    required: "닉네임을 입력해 주세요",
    maxLength: { value: 10, message: "닉네임은 10자 이하로 입력해주세요" },
  },
  link: {
    pattern: {
      value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,})\/?([\w/#.-]*)*(\?[\w=&.-]*)?(#[\w-]*)?$/, // 해당 정규식은 임시입니다.
      message: "올바른 url 형식이 아닙니다.",
    },
  },
  introduce: {
    maxLength: { value: 30, message: "한 줄 소개는 30자 이하로 입력해주세요" },
  },
};

export const LABELS = { nickname: "닉네임", link: "대표 링크", introduce: "한 줄 소개" };

export const REQUIRED = { nickname: true, link: false, introduce: false };

export const PLACEHOLDERS = {
  nickname: "",
  link: "http://",
  introduce: "한 줄 소개를 입력해주세요!",
};
