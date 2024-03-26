import Button from "@/components/commons/Button";
import styled from "styled-components";
import { PostApplyStatus } from "@/lib/api/post/type";
import { ButtonVariant } from "@/components/commons/Button";
import useOpenToggle from "@/hooks/useOpenToggle";
import ConfirmModal from "@/components/modals/ConfirmModal";
import InviteResponseModal from "@/components/modals/InviteResponseModal";
import { ConfirmType } from "@/components/modals/ConfirmModal";
import { useState, useEffect } from "react";
interface MappedButtonProps {
  postApplyStatus: PostApplyStatus;
  className?: string;
}

type ButtonMapped = {
  variant: ButtonVariant;
  text: string;
  disabled: boolean;
  type?: ConfirmType;
};

interface StatusButtonConfig {
  NOT_APPLIED: ButtonMapped;
  APPLIED: ButtonMapped;
  INVITED: ButtonMapped;
  RECRUIT_CLOSED: ButtonMapped;
}

const statusButtonConfig: StatusButtonConfig = {
  NOT_APPLIED: { variant: "primary", text: "지원하기", disabled: false, type: "apply" },
  APPLIED: { variant: "red", text: "지원 취소", disabled: false, type: "cancel" },
  INVITED: { variant: "ghost", text: "스카우트 답변하기", disabled: false },
  RECRUIT_CLOSED: { variant: "primary", text: "모집 완료", disabled: true },
};

export default function StatusBasedButton({ postApplyStatus, className }: MappedButtonProps) {
  const { isOpen: isConfirmOpen, openToggle: confirmToggle } = useOpenToggle();
  const { isOpen: isInviteResponseOpen, openToggle: inviteResponseToggle } = useOpenToggle();
  const [confirmType, setConfirmType] = useState<ConfirmType>("apply");

  const handleModal = () => {
    switch (postApplyStatus) {
      case "APPLIED":
      case "NOT_APPLIED":
        confirmToggle();
        break;
      case "INVITED":
        inviteResponseToggle();
        break;
    }
  };

  useEffect(() => {
    const currentStatusConfig = statusButtonConfig[postApplyStatus as keyof StatusButtonConfig];
    if (currentStatusConfig && currentStatusConfig.type) {
      setConfirmType(currentStatusConfig.type);
    }
  }, [postApplyStatus]);

  if (postApplyStatus === "OWNER") return null;

  return (
    <div className={className}>
      <StyledButton
        onClick={handleModal}
        variant={statusButtonConfig[postApplyStatus].variant}
        disabled={statusButtonConfig[postApplyStatus].disabled}>
        {statusButtonConfig[postApplyStatus].text}
      </StyledButton>
      {isConfirmOpen && <ConfirmModal type={confirmType} onClose={confirmToggle} />}
      {isInviteResponseOpen && <InviteResponseModal onClose={inviteResponseToggle} />}
    </div>
  );
}

const StyledButton = styled(Button)``;
