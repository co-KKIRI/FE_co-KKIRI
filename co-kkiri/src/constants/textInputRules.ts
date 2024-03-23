export type ModalTextFieldInputConfig = "nickname" | "position" | "career" | "link" | "stack" | "introduce";

interface ValidationRule {
  required?: string;
  minLength?: { value: number; message: string };
  maxLength?: { value: number; message: string };
  pattern?: { value: RegExp; message: string };
}

export const RULES: Record<ModalTextFieldInputConfig, ValidationRule> = {
  nickname: {
    required: "닉네임을 입력해 주세요",
    minLength: { value: 2, message: "닉네임은 2~10자로 입력해주세요" },
    maxLength: { value: 10, message: "닉네임은 2~10자로 입력해주세요" },
  },
  position: {},
  career: {},
  link: {
    pattern: {
      value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,})\/?([\w/#.-]*)*(\?[\w=&.-]*)?(#[\w-]*)?$/, // 해당 정규식은 임시입니다.
      message: "올바른 url 형식이 아닙니다.",
    },
  },
  stack: { maxLength: { value: 3, message: "기술 스택은 최대 3개까지 선택해주세요" } },
  introduce: {
    maxLength: { value: 30, message: "한 줄 소개는 30자 이하로 입력해주세요" },
  },
};

export const LABELS: Record<ModalTextFieldInputConfig, string> = {
  nickname: "닉네임",
  position: "포지션",
  career: "경력",
  link: "대표 링크",
  stack: "관심 스택",
  introduce: "한 줄 소개",
};

export const REQUIRED: Record<ModalTextFieldInputConfig, boolean> = {
  nickname: true,
  position: false,
  career: false,
  link: false,
  stack: false,
  introduce: false,
};

export const PLACEHOLDERS: Record<ModalTextFieldInputConfig, string> = {
  nickname: "",
  position: "",
  career: "",
  link: "http://",
  stack: "",
  introduce: "한 줄 소개를 입력해주세요!",
};
