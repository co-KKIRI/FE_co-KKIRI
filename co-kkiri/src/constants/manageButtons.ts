import { ButtonVariant } from "@/components/commons/Button";

interface ButtonType {
  type: string;
  isLeader: boolean;
  label: string;
  variant: ButtonVariant;
  disabled: boolean;
  onClick?: () => void;
}

export const BUTTON_TYPE: ButtonType[] = [
  {
    type: "READY",
    isLeader: true,
    label: "초대하기",
    variant: "ghost",
    disabled: false,
  },
  {
    type: "READY",
    isLeader: true,
    label: "스터디 시작",
    variant: "primary",
    disabled: false,
  },
  {
    type: "PROGRESS",
    isLeader: true,
    label: "스터디 완료",
    variant: "primary",
    disabled: false,
  },
  {
    type: "PROGRESS",
    isLeader: false,
    label: "스터디 진행 중",
    variant: "primary",
    disabled: true,
  },
  {
    type: "PROGRESS_END",
    isLeader: true,
    label: "리뷰 작성",
    variant: "primary",
    disabled: false,
  },
  {
    type: "DONE",
    isLeader: true,
    label: "리뷰 보기",
    variant: "primary",
    disabled: false,
  },
];
